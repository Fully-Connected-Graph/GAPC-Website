import { existsSync, readFileSync, promises } from "fs";
import path from "path";
import matter from "gray-matter";
import markdownit from "markdown-it";
import mdk from "@traptitech/markdown-it-katex";
import mdh from "markdown-it-highlightjs";
import type MarkdownIt from "markdown-it";

// Gives every heading a slug id (e.g. "Score and Leaderboard" -> "score-and-leaderboard")
// so pages can link to sections with #anchors.
function headingIds(md: MarkdownIt) {
  md.core.ruler.push("heading_ids", (state) => {
    const seen = new Map<string, number>();
    state.tokens.forEach((token, i) => {
      if (token.type !== "heading_open") return;
      const base = state.tokens[i + 1].content
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      token.attrSet("id", count ? `${base}-${count}` : base);
    });
  });
}

export async function* walk(dir: string): AsyncGenerator<string, void, void> {
  for await (const d of await promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

export function parseMarkdown(text: string) {
  const mdSettings = {
    html: true,
    linkify: true,
  };
  const katexSettings = { blockClass: "math-block", errorColor: " #cc0000" };
  const highlightSettings = {
    inline: false,
  };

  const { data, content } = matter(text);

  const markdown = markdownit(mdSettings)
    .use(mdk, katexSettings)
    .use(mdh, highlightSettings)
    .use(headingIds)
    .render(content);

  return { data, markdown };
}

export async function create(params: { slug?: string[] } = {}) {
  try {
    let filePath = "public/index.md";

    if (params.slug) {
      const slugPath = params.slug.join("/");
      filePath = existsSync(`public/${slugPath}.md`)
        ? `public/${slugPath}.md`
        : `public/${slugPath}/index.md`;
    }

    if (!existsSync(filePath)) {
      throw new Error(`File not found, ${filePath}`);
    }

    const text = readFileSync(filePath, "utf-8");

    return { ...parseMarkdown(text), error: null };
  } catch (error) {
    console.error("Error:", error);
    return { error: JSON.stringify(error), data: null, markdown: null };
  }
}

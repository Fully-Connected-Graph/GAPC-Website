import { MemberList } from "@/components/molecules/member-list";
import AboutUs from "@/components/templates/about-us";
import { create, walk } from "@/lib/server_utils";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const { data, markdown, error } = await create(params);

  if (error || !data || !markdown) {
    return notFound();
  }

  return (
    <>
      {!params.slug && (
        <div className="mb-8">
          <AboutUs />
        </div>
      )}
      {(data.thumbnail || data.title) && (
        <div className="relative mb-8 h-80 bg-swirl w-screen -translate-x-[calc(50vw-28rem)] max-lg:-translate-x-4 bg-black flex flex-col gap-6 justify-center overflow-hidden">
          <h1 className="text-5xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-md">
            {data.title}
          </h1>
          <img
            src={data.thumbnail}
            alt={data.title}
            className="object-cover w-full h-full blur-sm"
          />
        </div>
      )}
      <div>
        <div className="markdown-body">
          <article dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </div>
      {!params.slug && (
        <div className="mb-8">
          <MemberList />
        </div>
      )}
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const slugs = [];

  for await (const file of walk("public/")) {
    if (file.endsWith(".md")) {
      const slug = file
        .replace("public/", "")
        .replace(".md", "")
        .split(/[\/\\]/);
      slugs.push({ slug });

      if (slug[slug.length - 1] === "index") {
        slugs.push({ slug: slug.slice(0, -1) });
      }
    }
  }

  return slugs;
}

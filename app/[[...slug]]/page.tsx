import { MemberList } from "@/components/molecules/member-list";
import AboutUs from "@/components/templates/about-us";
import { create, walk } from "@/lib/server_utils";
import { X } from "lucide-react";
import Image from "next/image";
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
        <div className="relative mb-8 h-80 bg-black w-screen -translate-x-[calc(50vw-28rem)] max-lg:-translate-x-4 flex flex-col gap-6 justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            aria-hidden="true"
            style={{
              backgroundImage: "url('/assets/background-new.svg')",
              filter: "grayscale(1) brightness(1.2)",
            }}
          />
          <h1
            className="text-5xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-jbMono px-6 py-3 backdrop-blur-sm"
            style={{
              textShadow: "0 0 30px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,0.9)",
            }}
          >
            {data.title}
          </h1>
        </div>
      )}
      <div>
        <div className="markdown-body">
          <article dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </div>
      {!params.slug && (
        <>
          <div className="mb-8">
            <MemberList />
          </div>

          <div className="flex items-center justify-center flex-col w-full">
            <div className="text-4xl font-semibold mb-4">
              {" "}
              Organizations Behind GAPC{" "}
            </div>
            <div className="w-full">
              <div className="flex items-center justify-around w-full">
                <a
                  href="https://www.svcover.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Image
                      src="/assets/cover_logo.png"
                      alt="Image for the FCG committee"
                      height={200}
                      width={300}
                    />
                  </div>
                </a>
                <div className="w-15 h-15">
                  <X size={60} />
                </div>
                <div>
                  <a
                    href="https://www.svcover.nl/committees/programming_committee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/fcg.png"
                      alt="Image for the FCG committee"
                      height={200}
                      width={300}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
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

import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function BlogPostCard({ post }) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="space-y-4 md:hover:opacity-75 transition-opacity"
    >
      {/* <Image
        src={urlFor(post.image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={post.title}
        className="rounded-2xl border border-primary"
      /> */}
      <img
        src={urlFor(post.image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={post.title}
        className="rounded-2xl border border-cherrie"
      />
      <div className="space-y-2">
        <DatePill date={post.date} />
        <div>
          <h2 className="text-;g font-semibold">{post.title}</h2>
          <p className="line-clamp-1 text-sm text-black ">{post.description}</p>
        </div>
      </div>
    </Link>
  );
}

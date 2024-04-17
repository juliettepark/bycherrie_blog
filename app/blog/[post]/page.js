import Container from "@/app/components/Container";
import { client } from "@/sanity/lib/client";
import BlogPostHeader from "@/app/components/BlogPostHeader";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

export const revalidate = 60;

async function getBlogPosts(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug] {
      title,
      description,
      date,
      "slug":slug.current,
      image,
      content
    }`;

  const posts = await client.fetch(query, { slug });
  return posts;
}

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    // <Image
    //   src={urlForImage(value).fit("max").auto("format").url()}
    //   width={width}
    //   height={height}
    //   loading="lazy"
    //   className="mx-auto md:max-w-prose rounded-lg"
    //   style={{
    //     aspectRatio: width / height,
    //   }}
    // />
    <Image
      src={urlFor(value).fit("max").auto("format").url()}
      width={width}
      height={height}
      loading="lazy"
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
    // <img
    //   src={urlFor(value).auto("format").size(width, height).url()}
    //   width={width}
    //   height={height}
    //   alt={value.title}
    //   loading="lazy"
    //   className="mx-auto md:max-w-prose rounded-lg"
    //   style={{ aspectRatio: width / height }}
    // />
  );
}

export default async function Page({ params }) {
  // params.post is how we access the slug
  // Pass slug into our query
  const post = (await getBlogPosts(params.post))[0];
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Container>
      <div className="mx-auto max-w-5xl space-y-8 py-8">
        <BlogPostHeader post={post} />
        <hr className="border-secondary" />
        <article className="prose md:prose-md prose-primary mx-auto">
          <PortableText
            value={post.content}
            components={portableTextComponents}
          />
          {/* <img
            src={urlFor(post.image).auto("format").size(1920, 1080).url()}
            width={1920}
            height={1080}
            alt={post.title}
            className="rounded-2xl border border-cherrie"
          /> */}
        </article>
      </div>
    </Container>
  );
}

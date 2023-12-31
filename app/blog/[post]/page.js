import Container from "@/app/components/Container";
import { client } from "@/sanity/lib/client";
import BlogPostHeader from "@/app/components/BlogPostHeader";
import { PortableText } from "@portabletext/react";

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

export default async function Page({ params }) {
  // params.post is how we access the slug
  // Pass slug into our query
  const post = (await getBlogPosts(params.post))[0];
  return (
    <Container>
      <div className="mx-auto max-w-5xl space-y-8 py-8">
        <BlogPostHeader post={post} />
        <hr className="border-secondary" />
        <article>
          <PortableText value={post.content} components={[]} />
        </article>
      </div>
    </Container>
  );
}

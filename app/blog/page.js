import { client } from "@/sanity/lib/client";
import BlogPostCard from "../components/BlogPost";
import Container from "../components/Container";

async function getBlogPosts() {
  // const query = `*[_type == "blogPost"] {description}`;
  const query = `*[_type == "blogPost"] {
    title,
    description,
    date,
    "slug":slug.current,
    image
  }`;

  const posts = await client.fetch(query);
  return posts;
}

export default async function Blog() {
  const posts = await getBlogPosts();
  return (
    <Container>
      {/* <h1>{posts.length}</h1> */}
      {/* {posts.map((post) => (
        <p>{post.description}</p>
      ))} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}

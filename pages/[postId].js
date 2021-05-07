import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import "tailwindcss/tailwind.css";

const Post = ({ post }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="hero">
        <Link href="/">
          <p className="font-mono text-center text-3xl py-16">
            <a href="/">CaptAdorable's blog page</a>
          </p>
        </Link>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div
          key={post.slug}
          className="max-w-screen-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
        >
          <div>
            <Link href={post.slug}>
              <h2 className="text-gray-800 text-2xl font-semibold">
                <a href={post.slug}>{post.title}</a>
              </h2>
            </Link>
            <div className="mt-2">
              <ReactMarkdown source={post.details} />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-xl font-medium text-indigo-500">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default Post;

import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Head from "next/head"
import ReactMarkdown from "react-markdown";

import "tailwindcss/tailwind.css";

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>CaptAdorable's Blog Page!</title>
      </Head>

      <div className="hero">
        <p className="font-mono text-center text-3xl py-16">
          Welcome to CaptAdorable's blog page!
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
          >
            <div>
              <Link href={post.slug}>
                <h2 className="text-gray-800 text-2xl font-semibold">
                  <a href={post.slug}>{post.title}</a>
                </h2>
              </Link>
              <div className="mt-2">
                <ReactMarkdown source={post.details.slice(0, 300) + "..."} />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <p className="text-xl font-medium text-indigo-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;

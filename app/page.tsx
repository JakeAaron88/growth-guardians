// app/page.tsx
import { createClient } from 'contentful';
import React from 'react';
import Head from 'next/head';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'blogPost' });
  return {
    props: {
      blogPosts: res.items,
    },
  };
}

export default function HomePage({ blogPosts }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Growth Guardians</title>
        <meta name="description" content="Helping small businesses grow with support and recognition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center my-8">
          Welcome to <span className="text-blue-500">Growth Guardians</span>
        </h1>
        <p className="text-center text-lg mb-8">
          Helping small businesses grow with support and recognition
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="#about" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">About Us &rarr;</h3>
            <p className="mt-2 text-gray-600">Learn more about our mission and values.</p>
          </a>
          <a href="#services" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Services &rarr;</h3>
            <p className="mt-2 text-gray-600">Discover how we can help your business grow.</p>
          </a>
          <a href="#blog" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Blog &rarr;</h3>
            <p className="mt-2 text-gray-600">Read our latest articles and success stories.</p>
          </a>
          <a href="#contact" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Contact &rarr;</h3>
            <p className="mt-2 text-gray-600">Get in touch with us for more information.</p>
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.sys.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold">{post.fields.title}</h3>
                <p className="mt-2 text-gray-600">{post.fields.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-4">
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}

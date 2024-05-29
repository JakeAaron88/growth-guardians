import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Growth Guardians</title>
        <meta name="description" content="Empowering small businesses through community support and shared success stories." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Growth Guardians</h1>
        <p>Our mission is to support small businesses in need by connecting them with contributors who provide essential resources and expertise.</p>
      </main>

      <footer>
        <p>© 2024 Growth Guardians. All rights reserved.</p>
      </footer>
    </div>
  );
}

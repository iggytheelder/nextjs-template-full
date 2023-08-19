import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import JokeBlock from "../components/JokeBlock";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import requests from "../Utils/requests";
import axios from "axios";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      {/* Hader */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  try {
    const request = await axios.get(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests?.fetchTrending.url
      }`
    );
    return {
      props: {
        results: request.data.results,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        results: [],
      },
    };
  }
}

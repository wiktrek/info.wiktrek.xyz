import Navbar from "~/components/navbar";
import Movie, { type Props } from "~/components/movie";
export default function Page() {
  const movie: Props = {
    name: "Movie",
    description: "desc",
    episodes: 1,
    ratings: 1000,
    averageRating: 1.5,
  };
  return (
    <>
      <main className=" h-screen items-center justify-center text-center no-underline">
        <Navbar />
        <Movie
          name={movie.name}
          description={movie.description}
          ratings={movie.ratings}
          episodes={movie.episodes}
          averageRating={movie.averageRating}
        />
      </main>
    </>
  );
}

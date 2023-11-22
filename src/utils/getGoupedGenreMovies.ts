import MoviesData from "@/movies.json";
import { GroupedGenre } from "@/types/movies";
import { getGenreStyle } from "@/utils/getGenreStyle";

export const getGoupedGenreMovies = () => {
  const groupedMovies: GroupedGenre = {};
  MoviesData.forEach((movie) => {
    movie.genre.forEach((genre) => {
      if (groupedMovies[genre]) {
        groupedMovies[genre].push(movie);
      } else {
        groupedMovies[genre] = [movie];
      }
    });
  });
  return groupedMovies;
};

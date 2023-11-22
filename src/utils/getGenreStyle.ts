import { GENRES } from "@/constants";
export const getGenreStyle = (genre: string) => {
  const curGenre = GENRES.find((g) => g.id === genre);
  if (curGenre) {
    return {
      background: curGenre.hex,
    };
  }
  return undefined
};

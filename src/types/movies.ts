enum MovieGenre {
  Drama = "Drama",
  Crime = "Crime",
  Action = "Action",
  Biography = "Biography",
  History = "History",
  Adventure = "Adventure",
  Western = "Western",
  Romance = "Romance",
  Fantasy = "Fantasy",
  SciFi = "Sci-Fi",
  Music = "Music",
  Mystery = "Mystery",
  Animation = "Animation",
  Comedy = "Comedy",
  War = "War",
}

export type Movie = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  big_image: string;
  description: string;
  trailer: string;
  trailer_embed_link: string;
  trailer_youtube_id: string;
  genre: String[];
  director: string[];
  writers: string[];
  imdbid: string;
  imdb_link: string;
};

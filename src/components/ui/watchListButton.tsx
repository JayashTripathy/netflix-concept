import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ListPlus, ListX, Plus } from "lucide-react";
import { Movie } from "@/types/movies";

type Props = {
  movie: Movie;
};

function WatchListButton({ movie }: Props) {
  const [watchlist, setWatchList] = useLocalStorage<String[]>("watchlist", []);
  const addToWatchList = (movieid: string) => {
    if (watchlist) setWatchList([...watchlist, movieid]);
    else setWatchList([movieid]);
  };
  const removeFromWatchList = (movieid: string) => {
    if (watchlist) setWatchList(watchlist.filter((id) => id !== movieid));
  };
  return (
    <div>
      {!watchlist?.includes(movie.imdbid) ? (
   
          <button
            onClick={(e) => {
              e.preventDefault();
              addToWatchList(movie.imdbid);
            }}
            className="px-2 py-1 bg-secondary rounded-lg mr-2 flex text-xs gap-1 justify-center items-center"
          >
            <Plus size={20} />
          Watchlist
          </button>
      
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            removeFromWatchList(movie.imdbid);
          }}
          className="p-1 bg-primary rounded-lg mr-2 flex text-xs gap-1 justify-center items-center"
        >
          <ListX size={20} /> Remove
        </button>
      )}
    </div>
  );
}

export default WatchListButton;

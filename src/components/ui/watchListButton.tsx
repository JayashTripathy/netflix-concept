import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ListPlus, ListX, Plus } from "lucide-react";
import { Movie } from "@/types/movies";

type Props = {
  onAdd: () => void;
  onRemove: () => void;
  isOn: boolean;
};

function WatchListButton({ onAdd, onRemove, isOn }: Props) {
  return (
    <div>
      {!isOn ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            onAdd();
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
            onRemove();
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

import React from "react";
import CharaterItem from "./characterItem";
import Spinner from "../ui/spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharaterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;

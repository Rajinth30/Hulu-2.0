import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center" >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;

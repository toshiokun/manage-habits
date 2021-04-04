import React, { FC } from "react";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {[...Array(9)].map((_, index) => {
        return (
          <div
            className="border-2 border-green-500 hover:bg-indigo-700"
            key={index}
          >
            {index}
          </div>
        );
      })}
    </div>
  );
};

export default Home;

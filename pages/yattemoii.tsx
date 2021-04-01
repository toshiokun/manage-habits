import React, { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <div>やってもいいと思えること</div>
      {[...Array(9)].map((_, index) => {
        return (
          <div key={index}>
            <input className="border-blue-400 border-2" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;

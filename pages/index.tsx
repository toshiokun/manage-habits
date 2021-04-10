import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../app/counterSlice";
import { AppDispatch, RootState } from "../app/store";

const Home: FC = () => {
  const count = useSelector<RootState>(selectCount);
  const dispatch = useDispatch<AppDispatch>();

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

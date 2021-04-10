import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../app/counterSlice";
import { AppDispatch, RootState } from "../app/store";

const Objectives: FC = () => {
  const count = useSelector<RootState>(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {[...Array(9)].map((_, index) => {
        return (
          <div key={index}>
            <input className="border-2 border-green-500 hover:border-green-700" />
          </div>
        );
      })}
    </div>
  );
};

export default Objectives;

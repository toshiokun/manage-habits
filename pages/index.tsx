import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../app/counterSlice";
import { AppDispatch, RootState } from "../app/store";

const Home: FC = () => {
  const count = useSelector<RootState>(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <div className="font-bold text-lg">目標達成状況(全体)</div>
        <div className="justify-between flex">
          <span>
            <div>目標達成率</div>
            <div className="justify-between flex items-center">
              <span>
                <div>50%</div>
                <div>目標: 105分/週</div>
              </span>
              <span className="inline-block h-2 w-96  bg-blue-100"></span>
            </div>
          </span>
          <span>{">"}</span>
        </div>
        <div className="justify-between flex">
          <span>
            <div>直近7日間の達成状況</div>
            <div className="justify-between flex items-center">
              <span>
                <div>70km</div>
                <div>目標: 70km/週</div>
              </span>
              <span className="inline-block h-2 w-96  bg-blue-100"></span>
            </div>
          </span>
          <span>{">"}</span>
        </div>
      </div>
      <div>
        <div className="font-bold text-lg">目標達成状況(個別)</div>
        <div className="font-bold text-base">英語学習</div>
        <div className="justify-between flex">
          <span>
            <div>目標達成率</div>
            <div className="justify-between flex items-center">
              <span>
                <div>50%</div>
                <div>目標: 105分/週</div>
              </span>
              <span className="inline-block h-2 w-96  bg-blue-100"></span>
            </div>
          </span>
          <span>{">"}</span>
        </div>
        <div className="justify-between flex">
          <span>
            <div>直近7日間の達成状況</div>
            <div className="justify-between flex items-center">
              <span>
                <div>70km</div>
                <div>目標: 70km/週</div>
              </span>
              <span className="inline-block h-2 w-96  bg-blue-100"></span>
            </div>
          </span>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

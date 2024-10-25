import React, { FC } from "react";

import ArrowRise from "@/assets/charts/ArrowRise";
import { colors } from "@/utils/constants";

type cardDataType = {
  title: string;
  count: number;
  growth: number;
  cta: () => void;
  bg: string;
};

type CardsPropType = {
  data: cardDataType[];
};

const Card: FC<CardsPropType> = ({ data }) => (
  <>
    {data?.map((item, index) => (
      <div
        key={item?.title}
        className="h-full w-full rounded-2xl overflow-hidden p-6"
        style={{ background: item?.bg }}
        onClick={item?.cta}
      >
        <div>
          <p
            className={`font-semibold ${
              (index === 0 || index === 3) && "text-black"
            }`}
          >
            {item?.title}
          </p>
          <div className="flex justify-between items-center mt-2">
            <p
              className={`text-2xl leading-9 ${
                (index === 0 || index === 3) && "text-black"
              }`}
            >
              {`${index == 2 ? "$" : ""}${item?.count?.toLocaleString()}`}
            </p>
            <div className="flex items-center gap-2">
              <p
                className={`text-[12px] ${
                  (index === 0 || index === 3) && "text-black"
                }`}
              >{`${item?.growth > 0 ? "+" : ""}${item?.growth}%`}</p>
              <ArrowRise
                transform={`${item?.growth < 0 ? "rotate(180)" : "rotate(0)"}`}
                fill={(index === 0 || index === 3) && colors.black}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Card;

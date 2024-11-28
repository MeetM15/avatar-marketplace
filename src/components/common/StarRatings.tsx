import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const StarRatings = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <MdOutlineStar key={star} className="!w-4 !h-4 p-[1.33px]" />;
        } else {
          return (
            <MdOutlineStarBorder key={star} className="!w-4 !h-4 p-[1.33px]" />
          );
        }
      })}
    </div>
  );
};

export default StarRatings;

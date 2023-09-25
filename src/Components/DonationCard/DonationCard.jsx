/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id,picture,title,category,category_bg_color,bg_color, text_color} = donation || {};

  const bgColor = {
    backgroundColor: bg_color,
  };
  const categoryBgColor = {
    backgroundColor: category_bg_color,
    color: text_color,
  };
  const textColor = {
    color: text_color,
  };

  return (
    <Link to={`/donations/${id}`}>
      <div
        style={bgColor}
        className="relative flex h-96 w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={picture} alt={title} className="h-full w-full" />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <div
              style={categoryBgColor}
              className="rounded-md py-1 px-2">{category}
            </div>
          </div>
          <h2 style={textColor} className="font-medium text-xl">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;

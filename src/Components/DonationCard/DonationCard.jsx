/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {

const {id,picture,title,category} = donation || {}

  return (
    <Link to={`/donations/${id}`}>
    <div className="relative flex h-96 w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
      <img
        src={picture}
        className="h-full w-full object-cover"/>
    </div>
    <div className="p-6">
      <div className="mb-2  ">
        <p className="">
          {category}
        </p>
      </div>
      <h2>{title}</h2>
    </div>
    <div className="p-6 pt-0">
     
    </div>
  </div>
    </Link>
  );
};

export default DonationCard;

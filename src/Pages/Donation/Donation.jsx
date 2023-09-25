/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import DonationsStoredCard from "./DonationsStoredCard";
const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow,setIsShow] = useState(false)
  useEffect(() => {
    const DonateItems = JSON.parse(localStorage.getItem('donations'));
    if (DonateItems) {
      setDonations(DonateItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-2 gap-5">
            {
                isShow ? donations.map((donation) => (
                    <DonationsStoredCard key={donation.id} donation={donation}></DonationsStoredCard>
                  )) 
                  
                  : donations.slice(0,4).map((donation) => (
                    <DonationsStoredCard key={donation.id} donation={donation}></DonationsStoredCard>
                  ))
            }
          </div>
          {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-[#009444] p-2 rounded-md mt-6 text-white block mx-auto">
            {isShow ? "See less" : "See All"}
          </button>}
        </div>
      )}
    </div>
  );
};

export default Donation;
/* eslint-disable react/prop-types */
import DonationCard from "./DonationCard";

const Donations = ({donations}) => {
    return (

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
           {
            donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
           } 
        </div>
    );
};

export default Donations;
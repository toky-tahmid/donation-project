import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationsCard from "./DonationsCard";


const DonationDetails = () => {
 const [donation, setDonation] = useState({})
    const {id}  = useParams()
    const donations = useLoaderData()

    useEffect(() => {
      const findDonation = donations?.find((donation) => donation.id == id);
        setDonation(findDonation);
      }, [id, donations]);

    return (
     <div>
        <DonationsCard donation={donation}></DonationsCard>
     </div>

    );
};

export default DonationDetails;
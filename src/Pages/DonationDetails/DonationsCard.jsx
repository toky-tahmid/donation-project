/* eslint-disable react/prop-types */
import swal from 'sweetalert';
const DonationsCard = ({donation}) => {
    console.log(donation)


    const {id,picture,title,price} = donation || {}
    const handleAddToDonation = () => {
        const addedDonationsArray = []
        const donationItems = JSON.parse(localStorage.getItem('donations'))
         if(!donationItems){
          addedDonationsArray.push(donation)
          localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
          swal("Donated Successfully!");
         }
         else{
          const isExists = donationItems.find((donation) => donation.id === id)
          if(!isExists){
            addedDonationsArray.push(...donationItems,donation)
            localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
            swal("Donated Successfully!",);
          }
          else{
            swal("Already Donated!");
          }
         }

    }
    
      return ( 
        <div className="relative h-96 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img src={picture} className="h-full w-[600vh] object-cover" alt="" />
    <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-60"></div>
    <div className="absolute bottom-4 left-4">
      <button onClick={handleAddToDonation} className="bg-[#FF444A] text-white py-2 px-4 rounded-md shadow-md">
        Donate {price}
      </button>
    </div>
  </div>
  <div className="p-6">
    <div className="mb-2">
      <h1>{title}</h1>
    </div>
  </div>
</div>




      );
    };

export default DonationsCard;
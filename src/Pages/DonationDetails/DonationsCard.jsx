/* eslint-disable react/prop-types */
import swal from 'sweetalert';
const DonationsCard = ({donation}) => {
    console.log(donation)


    const { id,picture,title,category_bg_color,description,price} = donation || {}
    const categoryBgColor = {
      backgroundColor: category_bg_color,
    };  
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
          }}}
      return ( 
        <div>
  <div className="relative mt-4 h-96 overflow-hidden rounded-xl">
    <img src={picture} className="h-full w-[600vh] object-cover" alt="" />
    <div className="absolute bottom-4 left-4">
      <button style={categoryBgColor} onClick={handleAddToDonation} className="  py-2 px-4 rounded-md shadow-md text-white" >
        Donate ${price}
      </button>
    </div>
  </div>
  <div className="p-6">
    <div className="mb-2">
      <h1 className='text-2xl font-bold'>{title}</h1>
    </div>
    <div>
      <p className='text-xl font-medium'>{description}</p>
    </div>
  </div>
</div>
);
};

export default DonationsCard;
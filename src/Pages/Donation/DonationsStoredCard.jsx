/* eslint-disable react/prop-types */
const DonationsStoredCard = ({donation}) => {
  // eslint-disable-next-line no-unused-vars
    const { id,picture,title,category,category_bg_color,bg_color, text_color,price} = donation || {}
    const cardStyle = {
      backgroundColor: bg_color,
    };
    const categoryBgColor = {
      backgroundColor: category_bg_color,
    };
    
  return (
    <div  style={cardStyle} >
      <div className="card flex lg:flex gap-4 shadow-xl"> 
          <img src={picture} />
          <div className="">
          <div className="mb-2">
            <div
              style={categoryBgColor}
              className="rounded-md py-1 px-2">{category}
            </div>
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
            <p className="font-semibold text-blue-500">${price}</p>

            <button className="p-2 rounded-md px-3 -mr-2 mt-6 text-white bg-[#FF444A]">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonationsStoredCard;

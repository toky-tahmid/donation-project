const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url("https://i.ibb.co/TqSYWNn/Rectangle-4281.png")', 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.6,

  };
    return (
     
      <div
      className="h-[80vh] mt-5 rounded-lg flex flex-col justify-center items-center" style={bannerStyle}
      >
        <h1 className="text-center  font-bold text-4xl">I Grow By Helping People In Need</h1>
        <div className="flex justify-center mt-3">
          <input className="text-black px-5 py-3 rounded-md" type="search" name="" id="" placeholder="Search here...." />
          <div>
            <button className="p-3 rounded-md px-3 ml-1 text-white bg-[#FF444A]">Search</button>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Banner;
  
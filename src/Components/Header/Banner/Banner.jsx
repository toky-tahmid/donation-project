const Banner = () => {
    return (
      <div className="h-[80vh] mt-5 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-3xl">I Grow By Helping People In Need</h1>
        <div className="flex justify-center mt-3">
          <input className="text-black px-4 rounded-md" type="search" name="" id="" placeholder="Search here...." />
          <div>
            <button className="p-2 rounded-md px-3 ml-1 text-white bg-[#FF444A]">Search</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
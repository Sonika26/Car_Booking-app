const SellerCard = ({ seller }) => {
  return (
    <div className="seller-card bg-gray-100">
      <h3 className="font-bold ">For Buying Contact</h3>

      <div className="seller">
        <img src={seller.image} alt="" />

        <div>
          <h4>{seller.name}</h4>
          <p>{seller.role}</p>
        </div>
      </div>
      <button className=" bg-blue-500 text-white rounded p-10 w-30 mt-10"> BOOK NOW</button>
    </div>
  );
};

export default SellerCard;
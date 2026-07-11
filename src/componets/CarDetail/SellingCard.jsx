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
    </div>
  );
};

export default SellerCard;
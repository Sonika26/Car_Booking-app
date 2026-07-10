import "./CardCards.css";


const CarCards = ({ car }) => {

  return (
    <div className="car-card ">
      {/* Car image */}
      <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      <div className="like-car  absolute  rounded-full transparent bg-black/30 h-8 w-8 flex justify-center items-center text-white top-10 right-10 cursor-pointer text-xl ">
      <button className="like-button">♥</button>
      </div>

      {/* Car info */}
      <div className="car-info">
      <h3>{car.year} {car.make} {car.model}</h3>
      <p>{car.trim}</p>
      <h4>${car.price}</h4>

        {/* Extra details */}
        <ul className="car-details">
        <li>Mileage: {car.mileage} miles</li>
        <li>Transmission: {car.transmission}</li>
        <li>Fuel: {car.fuel}</li>
        <li>Location: {car.location}</li>
        </ul>


        <button
        >
        View Details
      </button>
    </div>
  </div>
);
};

export default CarCards;

const CarInfo = ({ car }) => {
  return (
    <div className="car-info rounded">
      <p className="location">📍 {car.location}</p>

      <div className="title-row">
        <div>
          <h1 className="font-bold text-gray-700">{car.name}</h1>
          <span className="type">{car.type}</span>
        </div>

        <div className="price-box">
          <h2>${car.price}</h2>
          <p>${car.rent}/day</p>
        </div>
      </div>

      <div className="specs">
        <span>⚙️ {car.transmission}</span>
        <span>💺 {car.seats}</span>
        <span>⛽ {car.fuel}</span>
        <span>🏎️ {car.speed}</span>
        </div>
        <div className="bg-white">
      <h3 className="font-bold text-xl">Car Details</h3>
      <p>{car.description}</p>
      </div>

      <h3 className="font-bold">Features</h3>
      <div className="features bg-white">
        {car.features.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default CarInfo;
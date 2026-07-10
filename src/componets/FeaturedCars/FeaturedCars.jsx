import cars from "../../Data/Data.json";
import CarCards from "../CarCards/CarCards";
import "./FeaturedCars.css";

const FeaturedCars = () => {
  return (
    <div className="featured ">

      <div className="car-grid ">
        {cars.slice(0,5).map((car) => (
          <CarCards key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
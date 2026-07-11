import cars from "../Data/cars";
import { useParams } from "react-router-dom";
import CarGallery from "../componets/CarDetail/CarGaller";
import CarInfo from "../componets/CarDetail/CarInfo";
import BookingForm from "../componets/CarDetail/BookingForm";
import SellerCard from "../componets/CarDetail/SellingCard";
import "../componets/CarDetail/carDetail.css";


const CarDetails = () => {
  const { id } = useParams(); // get id from URL
  const car = cars.find(c => c.id === Number(id))

  if (!car) {
    return <h2>Car not found</h2>;
    }
    return (
      <div className="car-details-page bg-gray-100">
        <div className="left ">
          <CarInfo car={car} />
          <BookingForm  car={car}/>
          <SellerCard seller={car.seller} />

        </div>
        <div className="right">
          <CarGallery images={car.images} />
        </div>
      </div>
    );
  };

  export default CarDetails;
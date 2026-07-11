import { useEffect, useState } from "react";

const MyBooking= () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    const sorted = data.sort((a, b) => b.id - a.id);
     setBookings(sorted);
  }, []);

  return (
    <div style={{ padding: "40px" }} className=" flex gap-5 flex-col bg-gray-100 px-10  space-y-8">
      <h1 className="font-bold text-2xl">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex justify-between h-40 border-gray-600 shadow-lg  px-10 bg-white rounded"
          >

            <div className="flex flex-col gap-8">
              <div className="">
              <h3 className="font-bold text-lg mt-10">{booking.carName}</h3>
              <h2>Seats:{booking.seats}</h2>
               <h3>Total: ${booking.totalAmount}</h3>
              </div>
                <div className=" bg-gray-100 flex flex-row gap-50 h-10 text-l mb-5 w-[1200px]">
              <p> Booking Id : #{booking.id}</p>
              <p>Pickup: {booking.pickup}</p>
              <p>Return: {booking.returnDate}</p>
              </div>
              </div>
          
            <div className="bg-gray-100 border h-40 mt-3 border-gray-100 rounded ">
            <img
              src={booking.carImage}
              alt={booking.carName}
              className="w-80 h-35 bg-gray-100 object-contain rounded"
            />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBooking;

import { useEffect, useState, useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const sorted = data.sort(
        (a, b) => b.createdAt?.seconds - a.createdAt?.seconds
      );
      setBookings(sorted);
    };

    fetchBookings();
  }, [user]);

  return (
    <div
      style={{ padding: "40px" }}
      className="flex gap-5 flex-col bg-gray-100 px-10 space-y-8"
    >
      <h1 className="font-bold text-2xl">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex justify-between h-40 border-gray-600 shadow-lg px-10 bg-white rounded"
          >
            {/* Left side details */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-bold text-lg mt-10">{booking.carName}</h3>
                <h2>Seats: {booking.seats}</h2>
                <h3>Total: ₹{booking.totalAmount}</h3>
              </div>

              <div className="bg-gray-100 flex flex-row gap-10 h-10 text-l mb-5 w-[1200px]">
                <p>Booking Id : #{booking.id}</p>
                <p>Pickup: {booking.pickupDate}</p>
                <p>Return: {booking.returnDate}</p>
              </div>
            </div>

            {/* Right side image */}
            <div className="bg-gray-100 border h-40 mt-3 border-gray-100 rounded">
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


import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const loadBookings = async () => {
      const snapshot = await getDocs(collection(db, "bookings"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(data);

      const total = data.reduce((sum, b) => sum + (b.totalAmount || 0), 0);
      setRevenue(total);
    };

    loadBookings();
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="flex gap-10 mb-10">
        <div className="bg-white shadow-md rounded p-6 w-60 text-center">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-2xl font-bold mt-2">{bookings.length}</p>
        </div>
        <div className="bg-white shadow-md rounded p-6 w-60 text-center">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold mt-2">₹{revenue}</p>
        </div>
      </div>

      {/* Booking List */}
      <h2 className="text-2xl font-semibold mb-4">Booking List</h2>
      <div className="space-y-6">
        {bookings.map((b, i) => (
          <div
            key={b.id}
            className="flex justify-between items-center bg-white shadow-md rounded p-6"
          >
            <div>
              <p className="font-bold text-lg">
                {i + 1}. {b.carName}
              </p>
              <p>User: {b.userName}</p>
              <p>
                Dates: {b.pickupDate} → {b.returnDate}
              </p>
              <p>Status: {b.status}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold">₹{b.totalAmount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

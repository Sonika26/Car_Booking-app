import { useState } from "react";

const CarGallery = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="gallery bg-white">
      <div className="main-image border border-gray-500 rounded">
        <img src={selected} alt="" />
      </div>

      <div className="thumbs">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={selected === img ? "active" : ""}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
import React from "react";

const ProductCard = ({name, price, image}) => {
  return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
        <img
          className="w-full h-48 object-cover rounded-xl"
          src={image}
          alt={name}
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-lg text-green-600 font-bold mt-1">
            Rp {price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

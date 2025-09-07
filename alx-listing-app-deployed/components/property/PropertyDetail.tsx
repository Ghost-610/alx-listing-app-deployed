// components/property/PropertyDetail.tsx
import React from "react";

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    imageUrl?: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {property.imageUrl && (
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-700 mb-4">{property.description}</p>
      <p className="text-lg font-semibold text-blue-600">
        ${property.price.toLocaleString()}
      </p>
      <p className="text-gray-500">{property.location}</p>
    </div>
  );
}

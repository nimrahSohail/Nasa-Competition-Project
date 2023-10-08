import React from 'react';

function LocationCard({ location, waterQuality, pHLevel, species }) {
  return (
    <div className="location-card">
      <h2>{location}</h2>
      <p>Water Quality: {waterQuality}</p>
      <p>pH Level: {pHLevel}</p>
      <p>Species: {species.join(', ')}</p>
    </div>
  );
}

export default LocationCard;
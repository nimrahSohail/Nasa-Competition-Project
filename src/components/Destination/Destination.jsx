import React, { useRef, useState } from "react";
import { destVideo } from "../../assets";
import "./Destination.css";
import LocationCard from "./LocationCard";

const Destination = () => {

  
  const indianOceanData = [
    {
      location: "Bay of Bengal",
      waterQuality: "Good",
      pHLevel: 8.1,
      species: ["Dolphins", "Tuna", "Sailfish", "Sea Turtles"],
    },
    {
      location: "Arabian Sea",
      waterQuality: "Fair",
      pHLevel: 7.9,
      species: ["Sharks", "Jellyfish", "Mackerel", "Coral Reefs"],
    },
    {
      location: "Andaman Sea",
      waterQuality: "Excellent",
      pHLevel: 8.2,
      species: ["Whale Sharks", "Seahorses", "Anemones", "Cuttlefish"],
    },
    {
      location: "Gulf of Mannar",
      waterQuality: "Good",
      pHLevel: 8.0,
      species: ["Sea Cucumbers", "Dugongs", "Groupers", "Eels"],
    },
    {
      location: "Lakshadweep Islands",
      waterQuality: "Excellent",
      pHLevel: 8.3,
      species: ["Turtles", "Butterflyfish", "Parrotfish", "Reef Sharks"],
    },
    {
      location: "Maldives",
      waterQuality: "Good",
      pHLevel: 8.1,
      species: ["Manta Rays", "Nudibranchs", "Hammerhead Sharks", "Anemonefish"],
    },
    {
      location: "Sri Lanka",
      waterQuality: "Fair",
      pHLevel: 7.8,
      species: ["Blue Whales", "Squid", "Moray Eels", "Boxfish"],
    },
    {
      location: "Seychelles",
      waterQuality: "Excellent",
      pHLevel: 8.4,
      species: ["Giant Tortoises", "Dolphin Fish", "Angelfish", "Hawksbill Turtles"],
    },
    {
      location: "Madagascar",
      waterQuality: "Good",
      pHLevel: 8.0,
      species: ["Lemurs", "Humpback Whales", "Pufferfish", "Triggerfish"],
    },
    {
      location: "Mauritius",
      waterQuality: "Fair",
      pHLevel: 7.9,
      species: ["Giant Clams", "Parrotfish", "Blue Spotted Stingrays", "Lionfish"],
    },
    {
      location: "Chagos Archipelago",
      waterQuality: "Excellent",
      pHLevel: 8.2,
      species: ["Napoleon Wrasse", "Moray Eels", "Clownfish", "Rays"],
    },
    {
      location: "Andhra Pradesh Coast",
      waterQuality: "Good",
      pHLevel: 8.1,
      species: ["Pelicans", "Tiger Sharks", "Grouper Fish", "Sea Snakes"],
    },
    {
      location: "Tamil Nadu Coast",
      waterQuality: "Fair",
      pHLevel: 7.9,
      species: ["Olive Ridley Turtles", "Sea Urchins", "Batfish", "Jellyfish"],
    },
    {
      location: "Western Australian Coast",
      waterQuality: "Excellent",
      pHLevel: 8.4,
      species: ["Great White Sharks", "Dolphins", "Anglerfish", "Squid"],
    },
    {
      location: "Laccadive Islands",
      waterQuality: "Good",
      pHLevel: 8.0,
      species: ["Moorish Idols", "Parrotfish", "Hawksbill Turtles", "Hammerhead Sharks"],
    },
    {
      location: "Somali Coast",
      waterQuality: "Fair",
      pHLevel: 7.8,
      species: ["Whale Sharks", "Barracudas", "Garden Eels", "Anemone Shrimp"],
    },
    {
      location: "Red Sea",
      waterQuality: "Excellent",
      pHLevel: 8.3,
      species: ["Coral Groupers", "Lionfish", "Moray Eels", "Triggerfish"],
    },
    {
      location: "Gulf of Aden",
      waterQuality: "Good",
      pHLevel: 8.1,
      species: ["Bottlenose Dolphins", "Yellowfin Tuna", "Tiger Sharks", "Grouper Fish"],
    },
    {
      location: "Gulf of Oman",
      waterQuality: "Fair",
      pHLevel: 7.9,
      species: ["Sea Cucumbers", "Blacktip Sharks", "Sea Anemones", "Blue Crabs"],
    },
  ];
  

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null); // Use null to indicate no match initially

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Find the first location that matches the search term
    const matchingLocation = indianOceanData.find((location) =>
      location.location.toLowerCase().includes(searchTerm)
    );

    setSearchResults(matchingLocation ? [matchingLocation] : null);
  };


  return (
    <div className="app__main" id="destination">
      <video src={destVideo} autoPlay loop muted />
      <div className="content">
      <h1>Indian Ocean Locations</h1>
      <div class="search">
            {/* <input type="text" class="search-bar" placeholder="Search"/>
            
             */}
                <input
        type="text"
        placeholder="Search for a location"
        value={searchTerm}
        class="search-bar"
        onChange={handleSearch}
      />
      <i class="fa fa-search button"></i>
        </div>
    <div className="location-list">
        {searchResults ? (
          <LocationCard
            location={searchResults[0].location}
            waterQuality={searchResults[0].waterQuality}
            pHLevel={searchResults[0].pHLevel}
            species={searchResults[0].species}
          />
        ) : (
          <p>No matching location found.</p>
        )}
      </div>

</div>
      
    </div>
  );
};

export default Destination;

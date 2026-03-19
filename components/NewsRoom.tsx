import React from "react";

const photos = [
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
    date: "27 Feb, 2026",
    text: "New contract has been developed by our Company",
  },
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
    date: "31 Mar, 2026",
    text: "Ships have been sailed over past 4 years",
  },
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
    date: "16 Jun, 2026",
    text: "Still? Waiting for the agreements? Just join us now!",
  },
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/02/SeaTech_Master_Shot01-lighthouse-480x360.webp?media=1726085813",
    date: "24 Jul, 2026",
    text: "Will new technologies gather for the next TechnoFest?",
  },
];

const NewsRoom = () => {
  return (
    <div className="text-center m-auto">
      <div className="text-white text-4xl font-sans">
        Newsroom
        <div className="flex gap-8 justify-center flex-wrap mt-8">
          {photos.map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={photo.img}
                alt={`News ${index}`}
                className="rounded-lg w-72 h-48 object-cover cursor-pointer"
              />
              <span className="text-sm text-gray-300 mt-3">{photo.date}</span>
              <span className="text-sm text-white mt-0.5">{photo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsRoom;

import React from "react";

const educationData = [
  {
    year: "2022",
    location: "United States",
    title: "Diploma In UI/UX Design",
    description: "Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam.",
    color: "pink",
  },
  {
    year: "2022",
    location: "New York",
    title: "Diploma In Web Design",
    description: "Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam.",
    color: "yellow",
  },
  {
    year: "2017",
    location: "United States",
    title: "Diploma In UI/UX Design",
    description: "Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam.",
    color: "orange",
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-700 mb-10">My Education</h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        {educationData.map((item, index) => (
          <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center mb-10 w-full` }>
            {/* Small Dot on Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
            {/* Year Circle */}
            <div className="relative w-20 h-20 flex items-center justify-center text-lg font-bold rounded-full border-4 bg-white"
              style={{ borderColor: item.color, color: item.color }}>
              {item.year}
            </div>
            {/* Content Box */}
            <div className={`w-5/12 p-5 bg-white shadow-lg rounded-lg border-l-4 ml-5 border-${item.color}-500`}>
              <span className={`text-xs font-bold uppercase px-2 py-1 rounded bg-${item.color}-200 text-${item.color}-800`}>
                {item.location}
              </span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

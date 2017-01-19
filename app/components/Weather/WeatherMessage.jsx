import React from 'react';

let WeatherMessage = ({location,temp}) => {
  return (
      <div>
          <h3>It's {temp}&deg; in {location}</h3>
      </div>
  );
};

export default WeatherMessage;

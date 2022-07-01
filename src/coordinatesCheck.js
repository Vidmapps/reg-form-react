export const loadCoordinates = async (user) => {
  const geoLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const plusCity = user.city.replaceAll(" ", "+");
  const plusStreet = user.street.replaceAll(" ", "+");
  const plusHouseNumber = user.houseNumber.replaceAll(" ", "+");
  const requestURL = `${geoLink}${plusHouseNumber}+${plusStreet}+${plusCity}+&key=${apiKey}`;

  let coordinates;

  await fetch(requestURL)
    .then((response) => response.json())
    .then((data) => (coordinates = data.results[0].geometry.location))
    .catch((error) => {
      alert(
        "NO API KEY FOUND: assign your own Google maps API key to `const apiKey` in `coordinatesCheck.js`."
      );
    });

  const linkToMap = `https://www.google.com/maps?q=${coordinates.lat}+${coordinates.lng}&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj7iaGgwNX4AhUBqYsKHZJABdUQ_AUoAXoECAEQAw`;

  const location = {
    coordinates,
    linkToMap,
  };

  return location;
};

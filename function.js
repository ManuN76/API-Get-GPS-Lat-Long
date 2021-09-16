window.function = async function (address, keyapi) {
  let adr = address.value ?? "";
  let key = keyapi.value ?? "";

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${adr}&key=${key}`
  );

  const data = await response.json();

  if (data.error_message) {
    return "Error :" + data.error_message;
  }

  return `${data.results[0].geometry.location.lat}, ${data.results[0].geometry.location.lng}`;
};

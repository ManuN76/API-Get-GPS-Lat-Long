const cache = new Map();

window.function = async function (address, keyapi) {
  if (address.value === undefined) return undefined;

  let keyApi = keyapi.value ?? "";

  let adr = address.value;

  let ret = cache.get(adr);

  if (ret === undefined) {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${adr}&key=${atob(
        keyApi
      )}`
    );

    const data = await response.json();

    if (data.error_message) {
      ret = "Error :" + data.error_message;
    } else {
      ret = `${data.results[0].geometry.location.lat}, ${data.results[0].geometry.location.lng}`;

      cache.set(adr, ret);
    }
  }

  return ret;
};

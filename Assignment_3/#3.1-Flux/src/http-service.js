async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const getData = () =>
  fetch("http://localhost:8080/data").then((response) => {
    return response.json();
  });

export const getDataForPlace = (place) =>
  fetch(`http://localhost:8080/data/${place}`).then((response) => {
    return response.json();
  });

export const createData = (data) => {
  return postData("http://localhost:8080/data", data);
};

export const getForecast = () =>
  fetch("http://localhost:8080/forecast").then((response) => {
    return response.json();
  });

export const getForecastForPlace = (place) =>
  fetch(`http://localhost:8080/forecast/${place}`).then((response) => {
    return response.json();
  });

export const getWarnings = fetch("http://localhost:8080/warnings").then(
  (response) => {
    return response.json();
  }
);

export const getWarning = (id) =>
  fetch(`http://localhost:8080/warnings/${id}`).then((response) => {
    return response.json();
  });

export const getWarningsSinceTme = (time) =>
  fetch(`http://localhost:8080/warnings/${time}`).then((response) => {
    return response.json();
  });

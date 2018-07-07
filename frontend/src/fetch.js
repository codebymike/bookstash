const handleErrors = (json) => {
  if (json.error) {
    throw new Error({ message: json.error.message, code: json.error.code })
  }
  return json;
}

export const fetchJSON = (fetch_url) => (
  fetch(fetch_url)
  .then(response => response.json())
  .then(json => handleErrors(json))
  .catch(error => error)
);
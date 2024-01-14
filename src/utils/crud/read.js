import { BASE_URL } from "../constData";

// const BASE_URL = "http://localhost:4040";

export default function getUserData(path) {
  return fetch(`${BASE_URL}/${path}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`Error: ${error}`))
    .finally(console.log("Final message no matter the result"));
}

getUserData("users");

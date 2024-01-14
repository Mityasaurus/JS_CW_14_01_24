import { BASE_URL } from "../constData";

// const BASE_URL = "http://localhost:4040";

const newUser = {
  login: "Mityasaurus",
  email: "mitya@gmail.com",
  password: "789",
  confirmPassword: "789",
};

export default function addData(path, data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/${path}`, options)
    .then((res) => res.json())
    .catch((error) => console.log(`Error: ${error}`));
}

addData("users", newUser);

import { BASE_URL } from "../constData";

export default function updateDataById(path, update, id) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/${path}/${id}`, options)
    .then((res) => res.json())
    .catch((error) => console.log(`Error: ${error}`));
}

updateDataById("users", { login: "Oleg", email: "oleg@gmail.com" }, "afe2");

import { error } from "console";
import { BASE_URL } from "../constData.js";
import getUserData from "./read.js";

export default function deleteData(path, findData) {
  const options = {
    method: "DELETE",
  };

  fetch(`${BASE_URL}/${path}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const userToDelete = json.find((u) => u.email === findData);
      console.log(userToDelete);
      if (userToDelete) {
        fetch(`${BASE_URL}/${path}/${userToDelete.id}`, options)
          .then((res) => res.json())
          .then((deletedItem) => {
            alert(`User ${deletedItem.email} was succesfully deleted`);
          })
          .catch((error) => console.error(error));
      } else {
        alert("User not found");
      }
    })
    .catch((error) => {
      console.error("Error while receiving data:", error);
    });
}

deleteData("users", "test@gmail.com");

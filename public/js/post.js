const createProject = document.querySelector(".Create-Post");
const submitButton = document.querySelector(".Submit-Button");
const deleteButton = document.querySelector(".delete");

const buttons1 = function (e) {
  console.log("createPost");
  e.preventDefault();
};

const buttons2 = function (e) {
  console.log("Submit button");
  e.preventDefault();
};

const buttons3 = function (e) {
  console.log("Delete button");
  e.preventDefault();
};

createProject.addEventListener("click", buttons1);
submitButton.addEventListener("click", buttons2);
deleteButton.addEventListener("click", buttons3);
buttons1();
buttons2();
buttons3();

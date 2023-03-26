const submitButton = document.querySelector(".submit-button");
const blogListContainer = document.querySelector(".blog-list");
const myDeleteButton = document.querySelector(".blog-list");

const submitPost = function (e) {
  e.preventDefault();

  const postTitleInput = document.querySelector(".post-title");
  const postContentInput = document.querySelector(".post-content");
  const postUsernameInput = document.querySelector(".post-username");

  const title = postTitleInput.value;
  const content = postContentInput.value;
  const username = postUsernameInput.value;

  console.log("Submitting post:", { title, content, username });

  fetch("/api/dashboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      content: content,
      username: username,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New post created:", data);

      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.content}</p>
        <p>Posted by ${data.username}</p>
        <div class="blog-post-buttons">
          <button class="edit-button" data-id="${data.id}">Edit</button>
          <button class="delete-button" data-id="${data.id}">Delete</button>
        </div>
      `;

      // Add an event listener to the delete button
      const deleteButton = postElement.querySelector(".delete-button");
      deleteButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the edit button
        const id = e.target.getAttribute("data-id");
        fetch(`/api/dashboard/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Blog post deleted:", data);
            postElement.remove();
          })
          .catch((error) => {
            console.error("Error deleting blog post:", error);
          });
      });

      blogListContainer.appendChild(postElement);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
};

const editButtonHandler = async (event) => {
  if (event.target.classList.contains("edit-button")) {
    const id = event.target.getAttribute("data-id");
    // Add your code to handle editing here
  }
};

submitButton.addEventListener("click", submitPost);
blogListContainer.addEventListener("click", editButtonHandler);

const delButtonHandler = async (event) => {
  if (event.target.classList.contains("delete-button")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/dashboard/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

submitButton.addEventListener("click", submitPost);
myDeleteButton.addEventListener("click", delButtonHandler);
blogListContainer.addEventListener("click", editButtonHandler);

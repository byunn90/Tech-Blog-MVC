const submitButton = document.querySelector(".submit-button");
const blogListContainer = document.querySelector(".blog-list");
const submitPost = function (e) {
  e.preventDefault();

  const postTitleInput = document.querySelector(".post-title");
  const postContentInput = document.querySelector(".post-content");

  const title = postTitleInput.value;
  const content = postContentInput.value;

  console.log("Submitting post:", { title, content });

  postTitleInput.value = "";
  postContentInput.value = "";

  fetch("/api/dashboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, content: content }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New post created:", data);

      // Create a new div element to hold the post data
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.content}</p>
      `;

      // Append the new post to the blog list container
      const blogListContainer = document.querySelector(".blog-list");
      blogListContainer.appendChild(postElement);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
};

submitButton.addEventListener("click", submitPost);

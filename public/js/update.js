const editButton = document.querySelector(".edit-button");

const editPost = function (e) {
  e.preventDefault();

  const postTitleInput = document.querySelector(".post-title");
  const postContentInput = document.querySelector(".post-content");
  const id = e.target.getAttribute("data-id");

  const title = postTitleInput.value;
  const content = postContentInput.value;

  fetch("/api/dashboard/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location = "/";
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
};

editButton.addEventListener("click", editPost);

// const container = document.querySelector(".container2");
//   const privacy = container.querySelector(".post2 .privacy");
//   const arrowBack = container.querySelector(".audience .arrow-back");
//   const postButton = container.querySelector(".post2 button");

//   privacy.addEventListener("click", () => {
//     container.classList.add("active");
//   });

//   arrowBack.addEventListener("click", () => {
//     container.classList.remove("active");
//   });

//   postButton.addEventListener("click", () => {
//     const textarea = document.querySelector(".post2 textarea");
//     textarea.value = "";
//     popup2.style.display = "none";
//   });


// const openPopupButton = document.getElementById("posting");
//         const popup2 = document.getElementById("popup2");

//         openPopupButton.addEventListener("click", () => {
//             popup2.style.display = "block";
//         });

//         window.addEventListener("click", (event) => {
//             if (event.target === popup2) {
//                 popup2.style.display = "none";
//             }
//         });


//  function addPost() {
//     const postInput = document.getElementById("post-input");
//     const postText = postInput.value;

//     if (postText.trim() !== "") {
//         const postList = document.getElementById("post-list");
//         const postItem = document.createElement("div");
//         postItem.className = "post";
//         postItem.textContent = postText;
//         postList.appendChild(postItem);
//         postInput.value = "";
//     }
// }




// let mind = document.querySelector("#Mind");
// let postContainer = document.querySelector("#postContainer");

// // Load saved posts from local storage when the page loads
// document.addEventListener("DOMContentLoaded", loadPosts);

// function addPost() {
//   let postText = mind.value.trim();

//   if (postText === "") {
//     return;
//   }

//   let post = document.createElement("div");
//   post.className = "post";
//   post.innerHTML = `
//     <div class="post-top">
//         <div class="dp">
//             <img src="./assets/l60Hf.png" alt="">
//         </div>
//         <div class="post-info">
//             <p class="name">name</p>
//             <span class="time">t</span>
//         </div>
//         <i class="fas fa-ellipsis-h delete" onclick="deletePost(this)"></i>
//     </div>
//     <p>${postText}</p>
//     <div class="post-bottom">
//         <div class="action">
//             <i class="far fa-thumbs-up"></i>
//             <span>Like</span>
//         </div>
//         <div class="action">
//             <i class="far fa-comment"></i>
//             <span>Comment</span>
//         </div>
//         <div class="action">
//             <i class="fa fa-share"></i>
//             <span>Share</span>
//         </div>
//     </div>
//   `;

//   postContainer.appendChild(post);

//   savePost(postText);

//   mind.value = "";
// }

// function savePost(postText) {
//   let existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

//   existingPosts.push(postText);

//   localStorage.setItem("posts", JSON.stringify(existingPosts));
// }

// function deletePost(deleteIcon) {
//   let post = deleteIcon.parentElement.parentElement.parentElement; // Navigate to the post element
//   postContainer.removeChild(post);

//   let postText = post.querySelector("p").textContent;
//   removePostFromLocalStorage(postText);
// }

// function removePostFromLocalStorage(postText) {
//   let existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
//   let updatedPosts = existingPosts.filter(post => post !== postText);
//   localStorage.setItem("posts", JSON.stringify(updatedPosts));
// }

// function loadPosts() {
//   let existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

//   for (let postText of existingPosts) {
//     let post = document.createElement("div");
//     post.className = "post";
//     post.innerHTML = `
//     <div class="post-top">
//         <div class="dp">
//             <img src="./assets/l60Hf.png" alt="">
//         </div>
//         <div class="post-info">
//             <p class="name">name</p>
//             <span class="time">t</span>
//         </div>
//         <i class="fas fa-ellipsis-h" onclick="deletePost(this)"></i>
//     </div>
//     <p>${postText}</p>
//     <div class="post-bottom">
//         <div class="action">
//             <i class="far fa-thumbs-up"></i>
//             <span>Like</span>
//         </div>
//         <div class="action">
//             <i class="far fa-comment"></i>
//             <span>Comment</span>
//         </div>
//         <div class="action">
//             <i class="fa fa-share"></i>
//             <span>Share</span>
//         </div>
//     </div>
//     `;

//     postContainer.appendChild(post);
//   }
// }

// function deletePost(deleteIcon) {
//     let post = deleteIcon.parentElement.parentElement.parentElement; // Navigate to the post element
//     if (postContainer.contains(post)) {
//       postContainer.removeChild(post);
//       let postText = post.querySelector("p").textContent;
//       removePostFromLocalStorage(postText);
//     }
//   }



  



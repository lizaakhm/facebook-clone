

const openButton = document.getElementById('openPopup');
const closeButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const select = document.getElementById("options2");
const selects = document.getElementById('options');


openButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
months.forEach((month, index) => {
  const option = document.createElement('option');
  option.value = `option${index + 1}`;
  option.textContent = month;
  selects.appendChild(option);
});

    function getBdayNumbersToChoose() {
      for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = `option${i}`;
        option.text = i;
        select.appendChild(option);
      }
    }
    getBdayNumbersToChoose();

    const selected = document.getElementById('years');
    const currentYear = new Date().getFullYear();
    const startYear = 1905;
  
    for (let year = startYear; year <= currentYear; year++) {
      const option = document.createElement('option');
      option.value = `option${year}`;
      option.textContent = year;
      selected.appendChild(option);
    }


    document.addEventListener("DOMContentLoaded", function () {
      var firstNameInput = document.getElementById("firstname");
      var lastNameInput = document.getElementById("lastname");
      var optionsInput = document.getElementById("options");
      var password2Input = document.getElementById("password2");
      var email2Input = document.getElementById("email2");
      var singupButton = document.getElementById("singupButton");

      singupButton.addEventListener("click", function () {
        var Name = firstNameInput.value;
        var last = lastNameInput.value;
        var options = optionsInput.value;
        var password2 = password2Input.value;
        var email2 = email2Input.value;
    
        
        localStorage.setItem("firstName", Name);
        localStorage.setItem("lastName", last);
        localStorage.setItem("options", options);
        localStorage.setItem("password2", password2);
        localStorage.setItem("email2", email2);
      });

        singupButton.addEventListener('click', () => {
          popup.style.display = 'none';
      });

  
   
      var emailInput = document.getElementById("emailInput");
      var passwordInput = document.getElementById("passwordInput");
      var saveButton = document.getElementById("saveButton");
    
      saveButton.addEventListener("click", function () {
        var enteredEmail = emailInput.value;
        var enteredPassword = passwordInput.value;
    
       
        var storedEmail = localStorage.getItem("email2");
        var storedPassword = localStorage.getItem("password2");
    
        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
          
          window.location.href = 'fb.html';
        } else {
          alert("Incorrect email or password");
        }
      });
    });



    const container = document.querySelector(".container2");
  const privacy = container.querySelector(".post2 .privacy");
  const arrowBack = container.querySelector(".audience .arrow-back");
  const postButton = container.querySelector(".post2 button");

  privacy.addEventListener("click", () => {
    container.classList.add("active");
  });

  arrowBack.addEventListener("click", () => {
    container.classList.remove("active");
  });

  postButton.addEventListener("click", () => {
    const textarea = document.querySelector(".post2 textarea");
    textarea.value = "";
    popup2.style.display = "none";
  });


const openPopupButton = document.getElementById("posting");
        const popup2 = document.getElementById("popup2");

        openPopupButton.addEventListener("click", () => {
            popup2.style.display = "block";
        });

        window.addEventListener("click", (event) => {
            if (event.target === popup2) {
                popup2.style.display = "none";


            }
        });






        ///



      //   function addPost() {
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
      
      
      
        
      
      
  
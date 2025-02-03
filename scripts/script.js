let bookCard = document.getElementsByClassName("books");
let like = document.getElementsByClassName("like-btn");
let liked = document.getElementsByClassName("liked-btn");
let likes = document.getElementsByClassName("likes-given");
let newLikes = document.getElementsByClassName("likes-given");
let userComment = document.getElementsByClassName("user-comments");
let newuserComment = document.getElementsByClassName("comment-input");

function renderAll() {
  getFromLocalStorage();
  renderBooks();
  renderComments();
}

function renderBooks() {
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookCard[0].innerHTML += booksTemplate(bookIndex);
    likes[bookIndex].innerHTML += likesTemplate(bookIndex);
    renderLikeBtn(bookIndex);
  }
}

function renderLikeBtn(bookIndex) {
  if (books[bookIndex].liked == true) {
    like[bookIndex].classList.add("d-none");
    liked[bookIndex].classList.remove("d-none");
  } else {
    liked[bookIndex].classList.add("d-none");
    like[bookIndex].classList.remove("d-none");
  }
}

function likeBook(booksIndex) {
  if (books[booksIndex].liked === true) {
    books[booksIndex].liked = false;
    books[booksIndex].likes = books[booksIndex].likes - 1;
    newLikes[booksIndex].innerHTML = books[booksIndex].likes;
  } else {
    books[booksIndex].liked = true;
    books[booksIndex].likes = books[booksIndex].likes + 1;
    newLikes[booksIndex].innerHTML = books[booksIndex].likes;
  }
  renderLikeBtn(booksIndex);
  saveToLocalStorage();
}

function renderComments() {
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    for (let commentsIndex = 0; commentsIndex < books[bookindex].comments.length; commentsIndex++) 
      {
      userComment[bookindex].innerHTML += userCommentTemplate(commentsIndex, bookindex);
    }
  }
}

function sendComment(bookIndex) {
  if (newuserComment[bookIndex].value == "") {
    alert("Geben Sie Bitte einen Kommentar ein!!");
  } else {
    let newComment = {
      name: "Viktor",
      comment: newuserComment[bookIndex].value,
    };
    books[bookIndex].comments.unshift(newComment);
    newuserComment[bookIndex].value = "";
    userComment[bookIndex].innerHTML = "";
    saveToLocalStorage();
    renderComments();
  }
}



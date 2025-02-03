function renderAll() {
  getFromLocalStorage();
  renderBooks();
  renderComments();
  renderLikes();
}

function renderBooks() {
  let bookCard = document.getElementsByClassName("books");
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookCard[0].innerHTML += booksTemplate(bookIndex);
    renderLikeBtn(bookIndex);
  }
}

function renderLikeBtn(bookIndex) {
  let like = document.getElementsByClassName("like-btn");
  let liked = document.getElementsByClassName("liked-btn");
  if (books[bookIndex].liked == true) {
    like[bookIndex].classList.add("d-none");
    liked[bookIndex].classList.remove("d-none");
  } else {
    liked[bookIndex].classList.add("d-none");
    like[bookIndex].classList.remove("d-none");
  }
}

function renderLikes() {
  let likes = document.getElementsByClassName("likes-given");
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    likes[bookIndex].innerHTML += likesTemplate(bookIndex);
  }
}

function likeBook(booksIndex) {
  let newLikes = document.getElementsByClassName("likes-given");
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
  let userComment = document.getElementsByClassName("user-comments");
  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    for (let commentsIndex = 0; commentsIndex < books[bookindex].comments.length; commentsIndex++) 
      {
      userComment[bookindex].innerHTML += userCommentTemplate(commentsIndex, bookindex);
    }
  }
}

function sendComment(bookIndex) {
  let newuserComment = document.getElementsByClassName("comment-input");
  let userComment = document.getElementsByClassName("user-comments");
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



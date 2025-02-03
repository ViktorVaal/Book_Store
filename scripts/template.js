function booksTemplate(bookIndex) {
  return `
  <div class="book-card">
  <div class="book-name">
        <h2>${books[bookIndex].name}</h2>
      </div>

      <div class="hl"></div>

      <div class="book-img">
        <img src="./img/a-book-1699641_1280.png" alt="" />
      </div>

      <div class="hl"></div>

      <div class="book-info">
        <div class="price-and-likes">
          <span>${books[bookIndex].price.toFixed(2).replace(".", ",")} €</span>
          <div class="likes">
            <span class="likes-given"></span><img class="like-btn" onclick="likeBook(${bookIndex})" src="./img/like.png" alt="" />
            <img class="liked-btn" onclick="likeBook(${bookIndex})" src="./img/liked.png" alt="" />
          </div>
        </div>

        <div class="main-info">
          <table class="main-info-table">
            <tr>
              <td class="bold">Author</td>
              <td>: ${books[bookIndex].author}</td>
            </tr>
            <tr>
              <td class="bold">Erscheinungsjahr</td>
              <td>: ${books[bookIndex].publishedYear}</td>
            </tr>
            <tr>
              <td class="bold">Genre</td>
              <td>: ${books[bookIndex].genre}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="hl"></div>

      <div class="comments">
        <h2>Kommentare:</h2>
        <div class="comment-section">
          <table class="user-comments">
          </table>
        </div>
        <div class="write-comment">
          <input
            
            class="comment-input"
            type="text"
            
            placeholder="Schreibe dein Kommentar..."
            required
          />
          <img onclick="sendComment(${bookIndex})" src="./img/send.png" alt="" />
        </div>
      </div>
      </div>`;
}

function userCommentTemplate(commentsIndex, bookindex) {
  return ` 
            <tr>
              <td class="td-left">${books[bookindex].comments[commentsIndex].name}</td>
              <td class="td-right">${books[bookindex].comments[commentsIndex].comment}</td>
            </tr>
  `;
}

function newCommentTemplate(bookindex) {
  return ` <tr>
              <td class="td-left">${books[bookindex].comments[0].name}</td>
              <td class="td-right">${books[bookindex].comments[0].comment}</td>
            </tr>`;
}

function likesTemplate(bookIndex) {
  return `
        ${books[bookIndex].likes}`;
}

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
  }
  
  function getFromLocalStorage() {
    let savedbooks = JSON.parse(localStorage.getItem("books"));
    if (savedbooks !== null) {
      books = savedbooks;
    }
  }
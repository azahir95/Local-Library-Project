function findAuthorById(authors, id) {
  return authors.find(author=> author.id===id);
}

function findBookById(books, id) {
  return books.find(book => book.id===id)
}

// 2 arrays. 1) borrowed books 2) returned books
function partitionBooksByBorrowedStatus(books) {
 let borrowedBooks = books.filter((book)=> book.borrows.some((borrow)=>borrow.returned===false));
 let returnedBooks = books.filter((book)=> book.borrows.every((borrow)=> borrow.returned===true));
 let result= [[...borrowedBooks], [...returnedBooks]];
 return result;
}

//
function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow)=> {
    let account = accounts.find((account) => account.id===borrow.id);
    return {...borrow, ...account};
  }).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

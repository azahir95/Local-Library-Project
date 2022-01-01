function findAccountById(accounts, id) {
  return accounts.find(account=> {
    return account.id===id;
  });
}

function sortAccountsByLastName(accounts) {
  let order = accounts.sort((a, b) => a.name.last.toLowerCase()> b.name.last.toLowerCase() ? 1: -1
    );
  return order;
}

// an account object 
// an array of all books objects
// It returns a _number_ that represents the number of times 
// the account's ID appears in any book's `borrows` array.
// iterate/loop over our books objects
// create variable to use to count when a book is borrowed
// look at the id of the borrows and compare to account.id, add if borrowed, 
// else return 0 bc it's not borrowed.
// return acc value + count value
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {  
    let count = book.borrows.reduce((borrowAcc, borrow) => {     
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0)
    
    return acc + count;
  }, 0);
}

//account object
//author object
//return how many books are not returned by an account
//match id in accounts and books.borrow. returned
// It returns an array of book objects, including author information, 
// that represents all books _currently checked out_ by the given account. 
// _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
function getBooksPossessedByAccount(account, books, authors) {
    return books
    .filter((book) => {
      let recent = book.borrows[0]
      return !recent.returned && recent.id === account.id
    })
    .map((book) => {
      let author = authors.find(author => author.id === book.authorId)
      return { ...book, author}
    })
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0
  ).length;
}
//should return an ordered list of most common genres
// each object in the returned array has 2 keys: 'name' and 'count'
//should limit the list to the top five (.slice(0, 5))
function getMostCommonGenres(books) {
 let result = {};
 books.forEach((num) => {
  if (result[num.genre]) {
   result[num.genre]++;
  } else {
   result[num.genre] = 1;
  }
 });
 return Object.entries(result)
  .map(([name, count]) => {
   return {name, count};
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}


//should return an ordered list of most popular books
//should limit the list to the top five
function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name : book.title, count: book.borrows.length};
  })
  .sort((a,b)=> (a.count<b.count ? 1: -1))
  .slice(0, 5);
}
 
//should return an ordered list of most popular authors
//should limit the list to the top five
function getMostPopularAuthors(books, authors) {
  let results=[];
  authors.forEach((author)=> {
    let authorFullName = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book)=> {
      if (book.authorId===author.id){
        authorFullName.count += book.borrows.length;
      }
    });
    results.push(authorFullName);
  });
  return results.sort((a, b)=> b.count-a.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

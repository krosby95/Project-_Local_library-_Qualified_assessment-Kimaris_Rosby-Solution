function getTotalBooksCount(books) {
  let total = books.length
  if(books.length === 0){
    return 0}
  return total
}

function getTotalAccountsCount(accounts) {
  let total = accounts.length
  if(accounts.length === 0){
    return 0}
  return total
}

function getBooksBorrowedCount(books) {
  let unavailable = [];
  books.forEach((bookie) => {
    if(bookie.borrows.some((transactions)=> !transactions.returned)){
      unavailable.push(books)
    }})
  return unavailable.length
}

function getMostCommonGenres(books) {
const genres = books.map((book)=> book.genre);
const item = [];

genres.map((genre)=>{
  const genreCounted = item.findIndex((value)=> value.name === genre);
      if(genreCounted >= 0){
        item[genreCounted].count = item[genreCounted].count + 1;
      }else{
        item.push({name: genre, count: 1});
      }
      });

  item.sort((a,b)=>b.count - a.count);
  if (item.length > 5){
    item.splice(5);
  }
  return item
}

function getMostPopularBooks(books) {
  const borrows = books.map((bookie => ({name: bookie.title, count: bookie.borrows.length})))

  borrows.sort((a,b)=>(b.count - a.count));

  borrows.splice(5)

  return borrows
}

function getMostPopularAuthors(books, authors) {
const authorList = books.reduce((acc, book) =>{
  const {authorId,borrows} = book;

  const authorAbout = authors.find(author => author.id === authorId);

  const name = `${authorAbout.name.first} ${authorAbout.name.last}`;

  const count = borrows.length

  const authThereAlready = acc.find(auth => auth.name === name)
          if(authThereAlready){
              authThereAlready.count += count;
          }else{
            const newAuthEntry = {name, count};

            acc.push(newAuthEntry)
          }
  return acc;},
  []);

  const sortedAuthorList = authorList.sort((a,b)=>b.count - a.count);

  const topFive = sortedAuthorList.slice(0,5);
console.log(topFive)
  return topFive;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

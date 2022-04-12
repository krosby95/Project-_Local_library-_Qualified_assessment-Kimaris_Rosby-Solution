function findAccountById(accounts, id) {

  let result = accounts.filter((accounts) => accounts.id === id)
return result[0]
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastA, lastB) => (lastA.name.last > lastB.name.last ? 1 : -1));
return(accounts);
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0

for(let i = 0; i < books.length; i++){
 let bookB = books[i].borrows

  for(let j = 0; j < bookB.length; j++){
    let bookArray = bookB[j]
    if(bookArray.id === account.id){
      result = result + 1
    }
  }
 } 

return result
}


function getBooksPossessedByAccount(account, books, authors) {
  
let result = []; 
books.forEach((book) => { let borrowed = book.borrows;
                         
    if (borrowed.find((borrow) => borrow.id === account.id && borrow.returned === false)) { result.push(book); } });
console.log(authors.id)

result.forEach((book) => { let author = authors.find((author) => author.id === book.authorId); book.author = author;})
return result}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

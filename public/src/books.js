function findAuthorById(authors, id) {
  let result = authors.filter((authors) => authors.id === id)
  return result[0]
}

function findBookById(books, id) {
  let result = books.filter((bookId) => bookId.id === id)
return result[0]
}

function partitionBooksByBorrowedStatus(books) {
 let returned = []
 let notReturned =[]

 books.forEach((bookie) => {
   if(bookie.borrows.some((transaction) => transaction.returned === false))
   { notReturned.push(bookie);
  } else {
     returned.push(bookie);
   }
 });
 return [notReturned, returned]
}
  
function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows; // use map to add the transaction id's account info to the transaction 
  
const result = transactions.map((transaction) => 
                 { const accountInfo = accounts.find(acc=>acc.id===transaction.id); 
                   const newTransaction = 
                         { ...transaction, ...accountInfo, }; 
                  return newTransaction; }); 
  
  result.splice(10); // limit the amount of transactions to 10 
  
  return result;// return the updated transaciton array 
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

const myLibrary = [];
const displayEle = document.querySelector('#book-display')
const addBtn = document.querySelector('#add-btn')
const dialogModal = document.querySelector('#modal')
const submitBtn = document.querySelector('#submit-btn')
const form = document.querySelector('#book-form')


function Book(title,author,pageNo,isRead) {
    this.title = title
    this.author = author
    this.pageNo = pageNo
    this.isRead = isRead
}



function addBookToLibrary() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pageNo = document.getElementById('pageNo').value
  const isRead = document.getElementById('read').checked

  const newBook = new Book(title,author,pageNo,isRead)

  myLibrary.push(newBook)
  displayBooks()

}

function displayBooks(){
  console.log(myLibrary)
  displayEle.innerHTML = ''
  myLibrary.forEach(book => {
    const bookCard = document.createElement('div')
    bookCard.classList.add('card')
     const titlePara = document.createElement('p')
     const authorPara = document.createElement('p')
     const pageNopara = document.createElement('p')
     const status = document.createElement('p')
     titlePara.textContent = book.title
     authorPara.textContent = book.author
     pageNopara.textContent = book.pageNo
     status.textContent = (book.isRead) ? 'read' : 'not read'
     bookCard.appendChild(titlePara)
     bookCard.appendChild(authorPara)
     bookCard.appendChild(pageNopara)
     bookCard.appendChild(status)

     
     displayEle.appendChild(bookCard)
     
  })


}



addBtn.addEventListener('click',(e) => {
    dialogModal.showModal()
    

})

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  addBookToLibrary()
  form.reset()
  dialogModal.close()

})


if(myLibrary.length === 0){
  const message = document.createElement('h2')
  message.textContent = 'Your library is empty'
  message.style.margin = "auto";
  displayEle.appendChild(message)
  
}

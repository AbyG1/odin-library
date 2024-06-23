const myLibrary = [];
const displayEle = document.querySelector('#book-display')
const addBtn = document.querySelector('#add-btn')
const dialogModal = document.querySelector('#modal')
const submitBtn = document.querySelector('#submit-btn')
const form = document.querySelector('#book-form')
let bookIdCounter = 0


function Book(title,author,pageNo,isRead) {
    this.title = title
    this.author = author
    this.pageNo = pageNo
    this.isRead = isRead
    this.id = ++bookIdCounter
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
 
  displayEle.innerHTML = ''
  myLibrary.forEach(book => {
    const bookCard = document.createElement('div')
    bookCard.classList.add('card')
     const titlePara = document.createElement('p')
     const authorPara = document.createElement('p')
     const pageNopara = document.createElement('p')
     const status = document.createElement('p')
     const removeBtn = document.createElement('button')
     removeBtn.classList.add('remove-btn')
     removeBtn.innerHTML= `
      <i class="fa-solid fa-xmark"></i>
      `
      removeBtn.setAttribute('data-remove',`${book.id}`)


     titlePara.textContent = book.title
     authorPara.textContent = book.author
     pageNopara.textContent = `${book.pageNo}  pages`
     status.textContent = (book.isRead) ? 'read' : 'not read'

     const classname = (book.isRead)? 'read':'not-read'
     status.classList.add(`${classname}`)
     status.setAttribute('data-status',`${book.id}`)
    
     bookCard.appendChild(removeBtn)
     bookCard.appendChild(titlePara)
     bookCard.appendChild(authorPara)
     bookCard.appendChild(pageNopara)
     bookCard.appendChild(status)

     
     displayEle.appendChild(bookCard)
     
  })


}


document.addEventListener('click',(e) => {
  if(e.target.dataset.status){
    changeReadStatus(+e.target.dataset.status)
  }
  if(e.target.dataset.remove || e.target.closest('[data-remove]')){
    removeBookFromLibrary(+e.target.dataset.remove)
  }
})


function changeReadStatus(bookId){
  const book = myLibrary.filter((book) => {
      return book.id === bookId
  })[0]
  book.isRead = !book.isRead
  displayBooks()
}

function removeBookFromLibrary(bookId){

  const book = myLibrary.filter((book) => {
    return book.id === bookId
})[0]
 const bookPositon = myLibrary.indexOf(book)
  myLibrary.splice(bookPositon,1)
  displayBooks()

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

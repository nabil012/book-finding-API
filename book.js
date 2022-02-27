const searchField = document.getElementById('search-field')
const totalResult = document.getElementById('result')
const searchBtn = () =>{
  
  const searchText = searchField.value
  searchField.value = ''
  //  document.getElementById('spinner').classList.remove('d-none')
   const spinner = document.getElementById('spinner')
  console.log(spinner)
  document.getElementById('error').textContent = ''
  spinner.classList.remove('d-none')
  const url =  `https://openlibrary.org/search.json?q=${searchText}`
  
  fetch(url)
  .then( res => res.json())
  .then(data => displayBooks(data.docs))
}


const displayBooks = docs =>{

totalResult.innerHTML =docs.length

const bookCard = document.getElementById('book-card')
bookCard.textContent =''
if(docs.length === 0 ){
  const error = document.getElementById('error')
error.textContent = 'invalid book name'
error.style.color='red'
spinner.classList.add('d-none')
}
else{
  docs.forEach( book=>{
   spinner.classList.add('d-none')
const div = document.createElement('div')
const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
div.classList.add('col')
div.innerHTML = `
<div class="card h-100">
<img src="${imgUrl}" class="w-100 h-25 card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${book.title}</h5>
  <h6>Author Name : ${book.author_name[0]}
  <hr>
  <p class="card-text fw-light">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
</div>
</div>
`
bookCard.appendChild(div)
})
}

}


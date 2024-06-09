import ReactDOM from 'react-dom/client';
import "./index.css"

function Bookname() {
  return (<h3>Book Name</h3>)
}
function Bookprice() {
  return (<p>Book Price</p>)
}
function BookAuthor() {
  return (<h3>Book Author</h3>)
}

function Bookimage() {
  return (<img src='https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg' />)
}

function Book() {
  return (<div className="book">
    <Bookimage />
    <Bookname />
    <Bookprice />
    <BookAuthor />
  </div>)

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </>
);

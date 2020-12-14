import React, {useEffect, useState} from 'react';
import { Container, Item, Header, Button } from 'semantic-ui-react';
import Reviews from './Reviews';
import AddReview from './AddReview';
import Comments from './Comments';
import './Books.css';

const Books = () => {

  const [booksList, setBooksList] = useState([]);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selBookReviews, setSelectedBookReviews] = useState([]);

  useEffect(() => {
    try {
      // function to get books list
      getBooks();
    }catch(error){
      //console error if api call fails
      console.log(error);
    }
  },[]);

  const getBooks = async() => {
    try {
      const response = await fetch('/books');
      const result = await response.json();
      if(result.status === 'success') {
        setBooksList(result.data)
      } else {
        setBooksList([])
      }

    } catch(error){

    }
  }

  const addReview = (bookId) => {
    setSelectedBook(bookId)
    setShowAddReviewModal(true);
  }

  const closeReviewModal = () =>{
    setShowAddReviewModal(false);
  }

  const showComments = (reviews) => {
    setShowCommentModal(true)
    setSelectedBookReviews(reviews)
  }

  const closeCommentModal = () => {
    setShowCommentModal(false);
  }

  return (
    <>
      <Container className="book-container">
        <Header as='h2' dividing>Books</Header>
        <Item.Group divided>
        {booksList.map((book,index) => {
          return (
            <Item key={`book_${index}`}>
              <Item.Image size='tiny' src={book.cover} />
              <Item.Content verticalAlign='top'>
                <Item.Header as='a'>{book.name}</Item.Header>
                <Item.Meta>
                  <span>{book.author}</span>
                </Item.Meta>
                <Item.Description>
                  {book.description}
                </Item.Description>
                <Item.Extra verticalAlign="bottom">
                  <Reviews totalReviews={book.reviews?book.reviews:[]} />
                  |
                  {book.reviews && book.reviews.length > 0?
                    <a
                      herf="#"
                      className="review-link"
                      onClick={()=>showComments(book.reviews)}
                    >
                      Comments({book.reviews?book.reviews.length:0})
                    </a>
                    :
                    <a
                      herf="#"
                      className="review-link"
                    >
                      Comments({book.reviews?book.reviews.length:0})
                    </a>
                  }
                </Item.Extra>
                <Button size="tiny"  basic color='blue' floated="right" onClick={()=>addReview(book.id)}>Add Review</Button>
              </Item.Content>
            </Item>
          )
        })
      }
      </Item.Group>
      <AddReview
        showAddReviewModal={showAddReviewModal}
        closeReviewModal={closeReviewModal}
        selectedBook={selectedBook}
        getBooks={getBooks}
      />
      <Comments
        showCommentModal={showCommentModal}
        reviews={selBookReviews}
        closeCommentModal={closeCommentModal}
      />
    </Container>
  </>
)}

export default Books;

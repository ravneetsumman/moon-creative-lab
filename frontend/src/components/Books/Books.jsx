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

  // open add-review modal
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
    setSelectedBook('');
    setSelectedBookReviews([]);
  }

  // update state of book list on successfull add of reviews
  const updateReviews = (payload) => {
    const copyBookList = [].concat(booksList);
    const response = copyBookList.map((book, index) => {
      if(book.id === payload.id) {
        if(book.reviews) {
          book.reviews.push({ratings:payload.rating,comment:payload.comment});
        } else {
          book.reviews = [].concat({ratings:payload.rating,comment:payload.comment});
        }
      }
      return book;
    });
    setBooksList(response);
    setSelectedBook('');
  }

  return (
    <>
      <Container className="book-container">
        <Header as='h2' dividing>Books</Header>
        <Item.Group divided>
        {booksList.length > 0?
          booksList.map((book,index) => {
          return (
            <Item key={`book_${index}`}>
              <Item.Image size='tiny' src={book.cover} />
              <Item.Content>
                <Item.Header as='a'>{book.name}</Item.Header>
                <Item.Meta>
                  <span>{book.author}</span>
                </Item.Meta>
                <Item.Description>
                  {book.description}
                </Item.Description>
                <Item.Extra>
                  <Reviews totalReviews={book.reviews?book.reviews:[]} />
                  |
                  {book.reviews && book.reviews.length > 0?
                    <a
                      href={null}
                      className="review-link"
                      onClick={()=>showComments(book.reviews)}
                    >
                      Comments({book.reviews?book.reviews.length:0})
                    </a>
                    :
                    <a
                      href={null}
                      className="review-link"
                    >
                      Comments({book.reviews?book.reviews.length:0})
                    </a>
                  }
                </Item.Extra>
                <Button
                  size="tiny"
                  basic
                  color='blue'
                  floated="right"
                  onClick={()=>addReview(book.id)}>
                  Add Review
                </Button>
              </Item.Content>
            </Item>
          )
        })
        :


            <span className="not-found">No Books Found!</span>

      }
      </Item.Group>
      <AddReview
        showAddReviewModal={showAddReviewModal}
        closeReviewModal={closeReviewModal}
        selectedBook={selectedBook}
        updateReviews={updateReviews}
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

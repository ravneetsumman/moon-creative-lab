import React, {useEffect, useState} from 'react';
import { Container, Item, Image } from 'semantic-ui-react';
import Reviews from './Reviews';
import AddReview from './AddReview';
import Comments from './Comments';

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

  return (
    <>
      <Container>
        <Item.Group divided>
        {booksList.map((book,index) => {
          return (
          <Item key={`book_${index}`}>
            <Item.Image src={book.cover} />
            <Item.Content>
              <Item.Header as='a'>{book.name}</Item.Header>
              <Item.Meta>
                <span>{book.author}</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                {book.description}
              </Item.Description>
              <Item.Extra>
                <Reviews
                  totalReviews={book.reviews?book.reviews:[]}
                />
                <a herf="#" onClick={()=>addReview(book.id)}>Add Review</a>
              </Item.Extra>
              <Item.Extra>
              {book.reviews && book.reviews.length > 0?
                <a herf="#"
                  onClick={()=>showComments(book.reviews)}
                  >
                    Comments({book.reviews?book.reviews.length:0})
                    </a>
            :    <a
                  herf="#"
                  >
                  Comments({book.reviews?book.reviews.length:0})
                </a>

              }

              </Item.Extra>

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
        <Comments showCommentModal={showCommentModal} reviews={selBookReviews}/>
      </Container>
    </>
  )

}


export default Books;

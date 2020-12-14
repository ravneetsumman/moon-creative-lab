import React, {useState} from 'react'
import { Button, Modal, Form, TextArea, Rating, Icon } from 'semantic-ui-react';


const AddReview = ({
  showAddReviewModal,
  closeReviewModal,
  selectedBook,
  getBooks
}) => {

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  // on change event for text area comment
  const handleChange = (evt) => {
    setComment(evt.target.value)
  }

  // set state of comment modal to false
  const closeModal = () => {
    setComment('');
    closeReviewModal();
  }

  // set state for rating
  const handleRate = (e, { rating, maxRating }) => {
    setRating(rating);
  }

  // add rating and comments to selected book
  const saveReview = async() => {
    const payload = {id: selectedBook, comment:comment, rating:rating}
    const response = await fetch('/save-review',{
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
    const result = await response.json();
    if(result.status === "success"){
      getBooks();
      closeModal();
    }
  }

  return (
    <>
      <Modal
        size="tiny"
        open={showAddReviewModal}
        onClose={() => closeModal}
      >
        <Modal.Header>
          Add Review
          <Icon
            className="comm-close-icon"
            name="close"
            size="small"
            onClick={closeModal}
          />
        </Modal.Header>
        <Modal.Content>
          <div className="stars-box">
            <Rating
              size='huge'
              maxRating={5}
              onRate={handleRate}
              defaultRating={0}
              icon='star'
            />
          </div>
          <Form>
            <TextArea
              value={comment}
              onChange={handleChange}
              placeholder='Add Comment...'
              maxLength={500}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={closeModal}>
            Cancel
          </Button>
          <Button
            disabled={comment === '' || rating ===0}
            basic
            color='blue'
            onClick={saveReview}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )}

export default AddReview;

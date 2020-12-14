import React, {useState} from 'react'
import { Button, Modal, Form, TextArea, Rating } from 'semantic-ui-react';


const AddReview = ({
  showAddReviewModal,
  closeReviewModal,
  selectedBook,
  getBooks
}) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleChange = (evt) => {
    setComment(evt.target.value)
  }


  const closeModal = () => {
    setComment('');
    closeReviewModal();
  }

  const handleRate = (e, { rating, maxRating }) => {
    setRating(rating);
  }

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
        <Modal.Header>Add Review</Modal.Header>
        <Modal.Content>
              <Rating size='large' maxRating={5} onRate={handleRate} defaultRating={0} icon='star'/>
            <br />
            <br/>
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
          <Button basic color='blue' onClick={saveReview}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default AddReview;

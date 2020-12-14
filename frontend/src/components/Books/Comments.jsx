import React from 'react';
import { Modal, Comment} from 'semantic-ui-react'

const Comments = ({reviews, showCommentModal, closeCommentModal}) => {
  return (
    <>
      <Modal
        open={showCommentModal}
        size="small"
        onClose={() => closeCommentModal}
      >
    <Modal.Header>Comments</Modal.Header>
      <Modal.Content image scrolling>
          <Comment.Group>
        {reviews.map((review, index) => {
          return (
            <Comment key={`comment_${index}`}>
            <Comment.Avatar src='/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Ravneet Kaur</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>{review.comment}</Comment.Text>
              </Comment.Content>
            </Comment>
          )
          })
        }
          </Comment.Group>
      </Modal.Content>
    </Modal>
  </>
  )
}
export default Comments;

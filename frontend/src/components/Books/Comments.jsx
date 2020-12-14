import React from 'react';
import { Modal, Comment, Icon} from 'semantic-ui-react'

const Comments = ({reviews, showCommentModal, closeCommentModal}) => {
  return (
    <>
      <Modal
        open={showCommentModal}
        size="small"
        onClose={closeCommentModal}
      >
    <Modal.Header>Comments
    <Icon className="comm-close-icon" C name="close" size="small" onClick={closeCommentModal}/>
    </Modal.Header>

      <Modal.Content image scrolling>
          <Comment.Group>
        {reviews.map((review, index) => {
          return (
            <Comment key={`comment_${index}`}>
              <div class="avatar">
              <Icon name="user outline" size="large" />
              </div>
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

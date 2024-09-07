import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardImage,
  MDBIcon
} from 'mdb-react-ui-kit';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <MDBContainer fluid className="mt-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="12" lg="10" xl="8">
          <MDBCard className="shadow-0 border" style={{ backgroundColor: "#f0f2f5" }}>
            <MDBCardBody>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Type comment..."
                 
                value={newComment}
                onChange={handleCommentChange}
              />

              {comments.map((comment, index) => (
                <MDBCard key={index} className="mb-4">
                  <MDBCardBody>
                    <p>{comment.text}</p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2">Anonymous</p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p className="small text-muted mb-0">Upvote?</p>
                        <MDBIcon
                          far
                          icon="thumbs-up mx-2 fa-xs text-black"
                          style={{ marginTop: "-0.16rem" }}
                        />
                        <p className="small text-muted mb-0">0</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              ))}

              <button className="btn btn-primary bg-black" onClick={handleAddComment}>Add Comment</button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CommentSection;

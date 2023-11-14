import styled from "styled-components";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";

const ReviewFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  textarea {
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    resize: vertical;
  }
  button {
    background-color: #333;
    color: #fff;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
  }
`;

const Notification = styled.div`
  background-color: #f5f5f5;
  color: #333;
  padding: 10px;
  margin-top: 10px;
`;

const ErrorNotification = styled(Notification)`
  background-color: red;
  color: #fff;
`;

const FeedbackForm = ({ animeId }) => {
    const [reviewText, setReviewText] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [showErrorNotification, setShowErrorNotification] = useState(false);

    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        if (reviewText.trim() !== "") {
            try {

                const docRef = await addDoc(collection(firestoreDB, `review`), {
                    title: animeId,
                    reviews: {
                        text: reviewText,
                        timestamp: new Date().toString(),
                    },
                });

                console.log("Review added with ID: ", docRef.id);


                setShowNotification(true);


                setReviewText("");

                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            } catch (error) {
                console.error("Error adding review: ", error);
            }
        } else {

            setShowErrorNotification(true);


            setTimeout(() => {
                setShowErrorNotification(false);
            }, 3000);
        }
    };

    return (
        <ReviewFormContainer onSubmit={handleReviewSubmit}>
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here"
                rows={4}
            ></textarea>
            <button type="submit">Submit Review</button>

            {showNotification && (
                <Notification>
                    Review has been sent!
                </Notification>
            )}

            {showErrorNotification && (
                <ErrorNotification>
                    Please write something before submitting!
                </ErrorNotification>
            )}
        </ReviewFormContainer>
    );
};

export default FeedbackForm;
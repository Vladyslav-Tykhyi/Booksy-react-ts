import s from "./Feedback.module.css";
import FeedbackList from "./FeedbackList/FeedbackList";
import FeedbackSubText from "./FeedbackSubText/FeedbackSubText";

const Feedback = () => {
  return (
    <div className={s.container} id="feedbacks">
      <h2 className={s.heading}>Customer Feedbacks</h2>
      <FeedbackSubText />
      <FeedbackList />
    </div>
  );
};

export default Feedback;

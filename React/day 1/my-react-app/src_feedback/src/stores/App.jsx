import { useState } from 'react';
import FeedbackFormControlled from './FeedbackFormControlled.jsx';
import FeedbackFormUncontrolled from '../FeedbackFormUncontrolled.jsx';
import FeedbackList from './FeedbackList.jsx';
import { useFeedbackStore } from './useFeedbackStore.jsx';

function App() {
    const removeAllFeedbacks = useFeedbackStore((state) => {return state.removeAllFeedbacks});

  return (
    <div>
      <h1>State Management Demo</h1>
      <button onClick={() => {removeAllFeedbacks()}}>Remove All Feedbacks</button>
      <FeedbackList />
         <FeedbackFormControlled /> 
        {/*<FeedbackFormUncontrolled/>*/}
    </div>
  );
 
}

 export default App;
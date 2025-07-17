import { useFeedbackStore } from "./useFeedbackStore"; 

const FeedbackList = () => {
    const feedbacks = useFeedbackStore((state) => state.feedbacks) ?? [];
    return(
        <div>
            <h2>Feedback List</h2>
            {feedbacks.length===0 && <p>No feedbacks available</p>}
            <table border="1">
                <tbody>
                {feedbacks.length>0 && <tr>
                    <th>Name</th><th>Course</th><th>Rating</th><th>Comment</th>
                    </tr>}
                {feedbacks.map((fb, index) => {
                    return (
                        <tr key={index}>
                            <td>{fb.name}</td>
                            <td>{fb.rating}</td>
                            <td>{fb.comments}</td>
                            <td>{fb.course}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}
export default FeedbackList;
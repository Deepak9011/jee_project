import './Upload_Question.css';

function UploadQuestion() {
    return (
        <>
            <form action="/UploadQuestion" method="POST">
                <label>Question Name: <input type="text" name="name"></input></label><br></br>
                <label>Description: <textarea name="description"></textarea></label><br></br>
                <label>Option A: <input type="text" name="optionA"></input></label><br></br>
                <label>Option B: <input type="text" name="optionB" /></label><br></br>
                <label>Option C: <input type="text" name="optionC" /></label><br></br>
                <label>Option D: <input type="text" name="optionD" /></label><br></br>
                <label>Correct Answer:
            <select name="correctAnswer">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </label><br></br>
                <label>Difficulty Level:
            <select name="difficulty">
                        <option>easy</option>
                        <option>medium</option>
                        <option>hard</option>
                    </select>
                </label><br></br>
                <label>Subject:
            <select name="subject">
                        <option>physics</option>
                        <option>chemistry</option>
                        <option>maths</option>
                    </select>
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default UploadQuestion;
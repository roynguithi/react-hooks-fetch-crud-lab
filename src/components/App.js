import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList'; // Ensure this component exists
import NewQuestionForm from './NewQuestionForm'; // Ensure this component exists

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addQuestion = (newQuestion) => {
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
    .then(response => response.json())
    .then(data => {
      setQuestions([...questions, data]);
    })
    .catch(error => console.error('Error adding question:', error));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Quizmaster Dashboard</h1>
      <NewQuestionForm onAddQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
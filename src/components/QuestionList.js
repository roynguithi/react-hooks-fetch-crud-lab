import React, { useState } from 'react';

function QuestionList({ questions }) {
  const [updatedQuestions, setUpdatedQuestions] = useState(questions);

  const updateQuestion = (id, correctIndex) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correctIndex })
    })
    .then(response => response.json())
    .then(updatedQuestion => {
      setUpdatedQuestions(updatedQuestions.map(question =>
        question.id === id ? updatedQuestion : question
      ));
    })
    .catch(error => console.error('Error updating question:', error));
  };

  return (
    <ul>
      {updatedQuestions.map(question => (
        <li key={question.id}>
          {question.prompt}
          <select
            value={question.correctIndex}
            onChange={(e) => updateQuestion(question.id, Number(e.target.value))}
          >
            {question.answers.map((_, index) => (
              <option key={index} value={index}>Answer {index + 1}</option>
            ))}
          </select>
        </li>
      ))}
    </ul>
  );
}

export default QuestionList;
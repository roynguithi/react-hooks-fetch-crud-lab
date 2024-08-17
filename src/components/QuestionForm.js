import React, { useState } from 'react';

function NewQuestionForm({ onAddQuestion }) {
  const [prompt, setPrompt] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddQuestion({ prompt, answers, correctIndex });
    setPrompt('');
    setAnswers(['', '', '', '']);
    setCorrectIndex(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Question prompt"
      />
      {answers.map((answer, index) => (
        <input
          key={index}
          type="text"
          value={answer}
          onChange={(e) => {
            const newAnswers = [...answers];
            newAnswers[index] = e.target.value;
            setAnswers(newAnswers);
          }}
          placeholder={`Answer ${index + 1}`}
        />
      ))}
      <select
        value={correctIndex}
        onChange={(e) => setCorrectIndex(Number(e.target.value))}
      >
        {answers.map((_, index) => (
          <option key={index} value={index}>Answer {index + 1}</option>
        ))}
      </select>
      <button type="submit">Add Question</button>
    </form>
  );
}

export default NewQuestionForm;
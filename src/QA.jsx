import { useState } from "react";

export function QA() {
  const QASets = [
    {
      id: 1,
      question: "what is Your name",
      answer: "Manik",
    },
    {
      id: 2,
      question: "What is ur Fav Color",
      answer: "Blue",
    },
    {
      id: 3,
      question: "What are you Learning now",
      answer: "React",
    },
    {
      id: 4,
      question: "How old are you",
      answer: 31,
    },
    {
      id: 5,
      question: "Which is your Fav place",
      answer: "Courtallam",
    },
  ];
  const [selectedId, setselectedId] = useState(null);

  function btnclick(id) {
    setselectedId(selectedId != id ? id : null);
  }
  return (
    <>
      <div className="QA">
        {QASets.map((set) => (
          <p
            onClick={() => btnclick(set.id)}
            key={set.id}
            className={selectedId == set.id ? "answer" : ""}
          >
            {selectedId == set.id ? set.answer : set.question}
          </p>
        ))}
      </div>
    </>
  );
}

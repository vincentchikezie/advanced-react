import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "read books",
  });
  const { name, age, hobby } = person;

  const displayPerson = () => {
    if (person.name === "Peter") {
      setPerson({ name: "John", age: 25, hobby: "play games" });
    } else {
      setPerson({ name: "Peter", age: 24, hobby: "read books" });
    }
  };
  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>Enjoys : {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Change Person
      </button>
    </>
  );
};

export default UseStateObject;

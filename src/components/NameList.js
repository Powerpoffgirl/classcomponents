import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Brue",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 20,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Diana",
      age: 32,
      skill: "Angular",
    },
  ];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {/* Approach 1 */}
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {/* Approach 2 */}
      {/* {nameList} */}
      {personList}
    </div>
  );
}

export default NameList;

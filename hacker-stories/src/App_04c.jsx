import { useState } from "react";

const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

function App() {
  let [filteredStudents, setFilteredStudents] = useState(students);
   
  const handleChange = (event) => {
    setFilteredStudents(
      students.filter(student => 
        student.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );}
  
  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
    <h1>Students</h1>
    <ul>
  {filteredStudents.map(function (item) {
    return (
      <li key={item.suid}>
        Name: {item.name}
        <br />
        Year: {item.year}
        <br />
        Major: {item.major}
      </li>
    );
  })}
</ul>
  </div>
      );
    };  

export default App;

// Week 10 Lecture Notes

// global variable - every component can see it
// const myGlobalVariable = "I'm global";

/*function App() {
  // local variable - only works in component
  const myLocalVariable = "I'm local";
  return (
    <div>
      <h1 className="green">Hello World</h1>
      <p>{myGlobalVariable}</p>
      <p>{myLocalVariable}</p>
      <p>separate<br />lines with br tag that needs trailing slash</p>
    </div>
  );
}*/

//export default App;


// Lab 10
// One
/* const students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}];

  function App() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {
            students.map(function(students) {
              return <li>Name: {students.name} <br/>
              Year: {students.year} <br/>
              Major: {students.major}
              </li>;
            })}
        </ul>
      </div>
    );
  }

export default App; */

// Two
/* const students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}];

  function App() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {
            students.map(function(students) {
              return <li key= {students.suid}>Name: {students.name} <br/>
              Year: {students.year} <br/>
              Major: {students.major}
              </li>;
            })}
        </ul>
      </div>
    );
  }

export default App;*/

// Three
/* const students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}];

  function App() {
    return (
      <div>
        <h1>Students</h1>
        <Students/>
      </div>
    );
  }

  function Students() {
    return (
      <div>
        <ul>
          {
            students.map(function(students) {
              return <li key= {students.suid}>Name: {students.name} <br/>
              Year: {students.year} <br/>
              Major: {students.major}
              </li>;
            })}
        </ul>
      </div>
    );
  }

export default App; */

// Four
/* function Button() {
  const push = () => {
    console.log("This is the message");
  }
  return (
  <button onClick={push}>Click Me!</button>
);
}

export default Button; */

// Five
/* let students = [{suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}];

function giveName() {
let output = 
  students.filter(students => students.name == "Sue Flay");
for (let i = 0; i < output.length; i++) {
  return output[i].name
};
}

export default giveName; */

// Week 11 Lecture Notes

// arrow function long form
/* const Hello2 = () => {
  return (
    <div>
      <h1>Hello 2</h1>
    </div>
  );
}

// arrow function concise
const Hello3 = () => ( <div><h1>Hello 3</h1></div> )


function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Hello2 />
      <Hello3 />
    </div>
  );
}

export default App; */

// event function - handling events

/* function App() {
  const handleChange = (event) => {
    // whole event
    console.log(event);
    // value of the typing
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

export default App; */

// use state
/* import { useState } from "react";

// sets up useState, variable, function that changes it, start value
const Home = () => {
  const [name, setName] = useState('Megan');

// function actually making dynamic change
let handleClick = () => {
  setName('Matt Lat');
}

  return (
    <div>
      <h1>Hello World</h1>
      {name} <br />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}


export default Home; */

// i think this one was wrong

/* const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

function App() {
  let filteredStudents = students;

  const handleChange = (event) => {
    filteredStudents = students.filter(student => student.name === event.target.value);
    console.log(filteredStudents);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    <ul>
      {
      filteredStudents.map(function(item) {
        return
        <li key={ClipboardItem.suid}>
          Name: {ClipboardItem.name}<br />
          Year: {ClipboardItem.year}<br />
          Major: {ClipboardItem.major}<br />
        </li>;
      })}
    </ul>
    </div>
  );
}

export default App; */

/* import { useState } from "react";

const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

function App() {
  let [filteredStudents, setFilteredStudents] = useState(students);
   
  const handleChange = (event) => {
    setFilteredStudents(
      students.filter(student => 
        student.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );}
  
  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
    <h1>Students</h1>
    <ul>
  {filteredStudents.map(function (item) {
    return (
      <li key={item.suid}>
        Name: {item.name}
        <br />
        Year: {item.year}
        <br />
        Major: {item.major}
      </li>
    );
  })}
</ul>
  </div>
      );
    };  

export default App; */
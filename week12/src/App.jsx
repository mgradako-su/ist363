import { useState } from "react";
import About from './About';
// ./means same folder as the App.jsx file

function Home () {
  return (
  <div>
    <h1>Home</h1>
  </div>
  );
}

function App () {
  const [page, setPage] = useState('home');
  return (
    <>
      <button onClilck={() => setPage('home')}>Home</button>
      <button onClilck={() => setPage('about')}>About</button>

      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </>
  );
}

export default App;

// NEW: Modularize our search -> takes callback handler as a prop
/* const Search = ({ onSearch }) => (
<div>
  <label htmlFor="search">Search: </label>
  <input id="search" type="text" onChange={onSearch} />
</div>
);

const List = (props) => {
  <ul>
    {props.list.map((item) => (
      <li key={item.suid}>{item.name} {item.year} {item.major}</li>
    ))}
  </ul>
};

function App() {
  //moved out of global space
  const students = [
    {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
    {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
    {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
  ];

  let [filteredStudents, setFilteredStudents] = useState(students);
   
  // this handler function stays here
  const handleChange = (event) => {
    setFilteredStudents(
      students.filter(student => 
        student.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );}
  
  return (
  <div>
    {/* NEW: Pass the handler function down to search component as a prop */ /*}
   /* <Search onSearch={handleChange} />
    <h1>Students</h1>
    {/* passing the student obkect to the list component */  /* }
  <List list={filteredStudents} />
  </div>
      );
    };  

export default App; */
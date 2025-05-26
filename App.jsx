// import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
// import './App.css';
// import Home from './component/Home';
// import About from '../src/component/About ';
// import Navbar from './component/Navbar';
// import Filter from './component/Filter';
// import Contact from './component/Contact';
// function App() {
//   return (
//     <div className="App">
//        <BrowserRouter> 
//       <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} /> 
//           <Route path="/*" element={<Navigate to="/"/>} /> 
//           <Route path="/Filter" element={<Filter />} /> 
//           <Route path="/Contact/" element={<Contact />} /> 
//           <Route path="/Companay" element={<Companay />} />
//           <Route path="/Channel" element={<Cchannel />} />
//           <Route path="/Other" element={<Other />} />
//         </Routes>
//       </BrowserRouter> 
//       <Filter/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [Users, setUser] = useState([])
  useEffect(() => {
    fetch("http://localhost:5173/todo").then((result) => {
      result.json().then((resp) => {
        setUser(resp)
      })
    })
  }, [])
  console.warn(Users)
  function deleteUser()
  {
    fetch('http://localhost:5173/todo/$(id)' ,{
      method:'DELETE'
    }).then((result)=>{
      result.json((resp)=>{
        console.warn(resp)

      })
  

    })
  }
  return (
    <div>
      <h1>delete data with api call</h1>
      <table border="2">
        <tr>
          <td>ID</td>
          <td>name</td>
          <td>mobile no</td>
          <td>Email</td>
          
        </tr>
        {
          data.map((item)=>
            <tr>
          <td>{item.UserID}</td>
          <td>{item.name}</td>
          <td>{item.mobileno}</td>
          <td>{item.Email}</td>
          <td><button onClick={()=>deleteUser(item .id)}>delete</button></td>
        </tr>

          )
        }
   
      </table>
    </div>
  );

}
export default App;
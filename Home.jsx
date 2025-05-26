import { Link,useNavigate } from "react-router-dom";

function Home()
{
    const Navigate=useNavigate();
    return (<>
    <h1>home page</h1>
    <p style={{backgroundColor:'pink',color:'blue'}}>here we have started react router which so fast and eficitent</p>
    <p style={{backgroundColor:'yellow',color:'black'}}>before router we just study react and before react we studied about html and css </p>
    <Link to="/about">go to abiut page for more detale</Link>
    <br></br>
    <button onClick={()=>Navigate('/about')}>go to about page</button>
    <br></br>
    <button onClick={()=>Navigate('/filter')}>go to filter page</button>
    </>
    )
}
export default Home;
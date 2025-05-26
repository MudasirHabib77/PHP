import { Link, Outlet } from "react-router-dom";

//import{useSearchParams,useLocation} from'react-router-dom'
function Contact()
{

    return(
        <div>
            <h1>contact us page</h1>
            <h2>here we have some other busnissess</h2>
            <Link to="Companay">companay</Link>
            <Link to="Channel">channel</Link>
            <Link to="Other">other</Link>
            <Outlet/>
        </div>
    )
}
export default Contact;
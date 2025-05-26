import { useParams } from "react-router-dom";
function User()
{
    const Params=useParams();
    const {name}=Params;
    console.warn(name)
    return(
        <div>
            <h1>this is {name}  page</h1>
        </div>
    )
}
export default  User;
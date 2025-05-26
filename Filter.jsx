import{useSearchParams,useLocation} from'react-router-dom'
function Filter()
{
const [searchParams,setSearchParams]=useSearchParams();
const age=searchParams.get('age');
const city=searchParams.get('city');
console.warn(age);
    return(
        <div>
            <h1>filter page</h1>
            <h2>age is :{age}</h2>
            <h3>city is :{city}</h3>
        </div>
    )
}
export default Filter;
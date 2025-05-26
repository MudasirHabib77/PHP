import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
   return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '1px solid #ccc' }}> {/* Added styles here */}
      <ul className="Navbar" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around' }}> {/* Added styles here */}
        <li style={{ margin: '0 10px' }}><Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</Link></li> {/* Added styles here */}
        <li style={{ margin: '0 10px' }}><Link to="/about" style={{ textDecoration: 'none', color: 'blue' }}>About</Link></li> {/* Added styles here */}
        <li style={{ margin: '0 10px' }}><Link to="/User/mudasir" style={{ textDecoration: 'none', color: 'blue' }}>mudasir</Link></li> {/* Added styles here */}
        <li style={{ margin: '0 10px' }}><Link to="/User/habib" style={{ textDecoration: 'none', color: '' }}>habib</Link></li> {/* Added styles here */}
      </ul>
    </div>
  );
}

export default Navbar;
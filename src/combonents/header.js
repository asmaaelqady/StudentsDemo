
import {Link} from 'react-router-dom'
const Header = ()=>{
    return (
        <div>
        <nav className="navbar navbar-dark bg-dark">
        <h2 className="text-white pl-5">Home</h2>
          <Link to="/addstudent" className="btn btn-primary my-2 my-sm-0 mr-5">Add Student</Link>
      </nav>
      </div>
    )
}

export default Header


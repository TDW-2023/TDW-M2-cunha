import { Link } from "react-router-dom";


export default function App() {

    return(
        <nav>
        <ul>
          <li>
            <Link to={`/ex1`}>EX1</Link>
          </li>
          <li>
            <Link to={`/ex2`}>EX2</Link>
          </li>
        </ul>
      </nav>
    );

}
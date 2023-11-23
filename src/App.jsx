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
          <li>
            <Link to={`/ex3`}>EX3</Link>
          </li>
          <li>
            <Link to={`/ex4`}>EX4</Link>
          </li>
          <li>
            <Link to={`/ex5`}>EX5</Link>
          </li>
        </ul>
      </nav>
    );

}
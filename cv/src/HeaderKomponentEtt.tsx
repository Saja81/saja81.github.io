import me from "./me.png";
import { Link } from "react-router-dom";

interface HeaderKomponentProps {
  mail: string;
  mobil: string;
}

function HeaderKomponentEtt(props: HeaderKomponentProps) {
  return (
    <header className="HeaderKomponent">
      <div className="row">
        <div className="col-12">
          <nav>
            <ul id="navul">
              <li>
                <Link to="/">CV</Link>
              </li>

              <li>
                <Link to="/about">Mer om mig</Link>
              </li>

              <li>
                <Link to="/lab">Projekt React</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <img src={me} alt="me" />
        </div>
        <div className="col-md-5 col-sm-12">
          <h1>Sandra Jakobsson</h1>
          <h2>Student Frontendutvecklare</h2>

          <p id="headerett">
            Nyfiken och hungrig Frontendare "in progress" söker LIA!
          </p>
        </div>
        <div className="col-md-3 col-sm-12">
          <h5>Email:</h5>
          <p>{props.mail}</p>
          <h5>Mobilnummer:</h5>
          <p>{props.mobil}</p>
          <h5>Linkedin:</h5>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/sandrajakobsson81/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sandrajakobsson81
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeaderKomponentEtt;

import logo from "../logo.svg";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to the EPICS Data Explorer.
                </p>
                <Link className="App-link" to="/explore">Explore!</Link>
            </header>
        </div>
    );
};

export default HomePage;
import Buttons from './buttons';
import SearchForm from './searchForm';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '55px' }}>
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand" to='/'>Online Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <SearchForm />                   
                    <Buttons />
                </div>
            </nav>

        </>
    );
}

export default Header;
import Nav from 'react-bootstrap/Nav';

const Logout = () => {

    return (
        <Nav.Link onClick={() => {
            sessionStorage.setItem("isLogged", false);
            window.location.reload();
            sessionStorage.setItem("productList", null)
        }}>
            Logout
        </Nav.Link>);
};

export default Logout;
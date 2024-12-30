import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast.success("Logout successful");
      })
      .catch(err => {
        toast.error("Couldn't log out");
      });
  };

  return (
    <header className="bg-white sticky top-0 shadow z-50">
      <nav className="container bg-white">
        <Navbar fluid rounded className="bg-white">
          <Navbar.Brand>
            <Link className="font-extrabold text-xl">ArtifactHub</Link>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt={user?.displayName}
                    img={user?.photoURL}
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Link to="/add-artifact">
                  <Dropdown.Item>Add Artifact</Dropdown.Item>
                </Link>

                <Link to="/my-artifacts">
                  <Dropdown.Item>My Artifacts</Dropdown.Item>
                </Link>

                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/" active={pathname === "/"}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/artifacts" active={pathname === "/artifacts"}>
              All Artifacts
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default Header;

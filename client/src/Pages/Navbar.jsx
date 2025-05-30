import { useNavigate } from "react-router-dom";
import { success } from "../Utils/notification";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../Redux/authentication/auth.action";
import logo from "../Images/headlogo.png"; // ✅ Import your logo
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.data.token);
  const handlelogout = () => {
    Cookies.remove("jwttoken");
    Cookies.remove("userid");
    dispatch(logoutAPI());
    navigate("/");
    success("Logout Successfully");
  };
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary text-bg-primary">
      <div className="container-fluid">
         <a
  className="navbar-brand d-flex align-items-center"
  style={{
    cursor: "pointer",
    height: "56px", // Typical navbar height
    overflow: "visible", // Allow overflow
  }}
  onClick={() => navigate("/")}
>
  <img
    src={logo}
    alt="VenkyBus Logo"
    style={{
      height: "160px",              // Large logo
      marginTop: "-15px",          // Move logo up
      marginBottom: "-15px",       // Optional: shift back down to center
      objectFit: "contain",
    }}
  />
</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/myticket`)}
              >
                My Tickets
              </a>
            </li>
          </ul>
          <div>
            {token ? (
              <button
                className="btn btn-outline-success"
                style={{
                  borderRadius: "10px",
                  border: "2px solid",
                  marginRight: "8px",
                  color: "white",
                }}
                onClick={() => handlelogout()}
              >
                Logout
              </button>
            ) : (
              <div>
                {" "}
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate("/signin")}
                  style={{
                    borderRadius: "10px",
                    border: "2px solid",
                    marginRight: "8px",
                    color: "white",
                  }}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
    const navItems = [
        { to: "/dashboard", label: "Dashboard", icon: "Squares four 1.png" },
        { to: "/project", label: "Project", icon: "Folder.png" },
        { to: "/team", label: "Team", icon: "Groups.png" },
        { to: "/analytics", label: "Analytics", icon: "Pie chart.png" },
        { to: "/message", label: "Message", icon: "Chat.png" },
        { to: "/integration", label: "Integration", icon: "Code.png" }
    ];

    return (
        <div className="menu">
            <img src="../img/Image 1858.png" alt="" className="img-fluid mb-3" />
            <Nav className="flex-column">
                {navItems.map((item) => (
                    <Nav.Item key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                "nav-link d-flex align-items-center" + (isActive ? " active-link" : "")
                            }
                            style={({ isActive }) => ({
                                backgroundColor: isActive ? "#FF4E88" : "transparent",
                                color: isActive ? "white" : "black",
                                borderRadius: "5px",
                                textDecoration: "none",
                                padding: "8px"
                            })}
                        >
                            <img src={`../img/${item.icon}`} alt="" />
                            <p className="ms-lg-3 mb-0">{item.label}</p>
                        </NavLink>
                    </Nav.Item>
                ))}
            </Nav>

            <div
                style={{ backgroundColor: "#D1E9F6", height: "400px" }}
                className="d-flex justify-content-center align-items-center p-5 mt-5"
            >
                <div
                    style={{
                        backgroundImage: "url(../img/Group.png)",
                        backgroundRepeat: "no-repeat"
                    }}
                    className="w-100 h-100 d-flex justify-content-center align-items-center flex-column"
                >
                    <p style={{ fontWeight: "bold", marginTop: "280px" }}>V2.0 is available</p>
                    <button
                        style={{
                            color: "#5B99C2",
                            backgroundColor: "white",
                            borderColor: "#5B99C2",
                            width: "150px",
                            height: "40px"
                        }}
                    >
                        Try now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;



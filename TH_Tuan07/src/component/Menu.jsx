import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { key: "/dashboard", label: "Dashboard", icon: "Squares four 1.png" },
        { key: "/project", label: "Project", icon: "Folder.png" },
        { key: "/team", label: "Team", icon: "Groups.png" },
        { key: "/analytics", label: "Analytics", icon: "Pie chart.png" },
        { key: "/message", label: "Message", icon: "Chat.png" },
        { key: "/integration", label: "Integration", icon: "Code.png" }
    ];

    return (
        <div className="menu">
            <img src="../img/Image 1858.png" alt="" className="img-fluid mb-3" />
            <Nav variant="pills" className="flex-column">
                {navItems.map((item) => (
                    <Nav.Item key={item.key}>
                        <Nav.Link
                            href={item.key}
                            className="d-flex align-items-center"
                            style={{
                                backgroundColor: currentPath === item.key ? "#FF4E88" : "transparent",
                                color: currentPath === item.key ? "white" : "black"
                            }}
                        >
                            <div style={{ backgroundColor: "#ffffff", padding: "0px" }}><img src={`../img/${item.icon}`} alt="" /></div>
                            <p className="ms-lg-3 mb-0">{item.label}</p>
                        </Nav.Link>
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

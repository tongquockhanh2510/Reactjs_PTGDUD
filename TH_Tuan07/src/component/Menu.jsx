import { Nav, NavDropdown } from "react-bootstrap";

const Menu = () => {
    return (
        <div className="menu" >
            <img src="../img/Image 1858.png" alt="" className="img-fluid mb-3" />
            <Nav variant="pills" activeKey="1" onSelect={(eventKey) => console.log("selected", eventKey)} className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#/home" className="d-flex align-items-center" style={{ backgroundColor: "#FF4E88" }}>
                        <div style={{ backgroundColor: "#ffffff", padding: "0px" }}><img src="../img/Squares four 1.png" alt="" /></div>
                        <p className="ms-lg-3 mb-0 ">Dashboard</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" disabled className="d-flex align-items-center">
                        <img src="../img/Folder.png" alt="" />
                        <p className="ms-lg-3 mb-0">Project</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" disabled className="d-flex align-items-center">
                        <img src="../img/Groups.png" alt="" />
                        <p className="ms-lg-3 mb-0">Team</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4" disabled className="d-flex align-items-center">
                        <img src="../img/Pie chart.png" alt="" />
                        <p className="ms-lg-3 mb-0">Analytics</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="5" disabled className="d-flex align-items-center">
                        <img src="../img/Chat.png" alt="" />
                        <p className="ms-lg-3 mb-0">Message</p>
                    </Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link eventKey="6" disabled className="d-flex align-items-center">
                        <img src="../img/Code.png" alt="" />
                        <p className="ms-lg-3 mb-0">Intergration</p>
                    </Nav.Link>
                </Nav.Item>

            </Nav>
            <div style={{ backgroundColor: "#D1E9F6" ,height:"400px"}} className="d-flex justify-content-center align-items-center p-5 mt-5" >
                <div style={{ backgroundImage: "url(../img/Group.png)", backgroundRepeat: "no-repeat" }} className="w-100 h-100 d-flex justify-content-center align-items-center flex-column    ">
                    <p  style={{ fontWeight: "bold" ,marginTop:"280px"}}>
                        V2.0 is available
                    </p>
                    <button style={{ color: "#5B99C2", backgroundColor: "white", borderColor: "#5B99C2",width:"150px",height:"40px" }}>Try now</button>
                </div>
            </div>

        </div>
    )
}
export default Menu
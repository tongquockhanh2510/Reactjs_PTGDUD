const Header = () => {
    return (
        <div className="header d-flex justify-content-between align-items-center pe-4 ps-4 pt-1 pb-1" >
            <h2 style={{color:"#FF4E88"}}>Dashboard</h2>
            <div className="d-flex justify-content-between align-items-center">
                <div style={{position:"relative"}}>
                <img src="../img/Search.png" alt="" style={{position:"absolute",left:"7px",top:"7px"}}/>
                <input type="text" placeholder="Search" style={{paddingLeft:"25px",borderRadius:"5px",backgroundColor:"#F5F5F5",border:"none"}}/>
            </div>
            <img src="../img/Bell 1.png" alt="" className="ms-3"/>
            <img src="../img/Question 1.png" alt="" className="ms-3"/>
            <img src="../img/Avatar 313.png" alt="" className="ms-3"/>
            </div>
            
        </div>
    )
}
export default Header;


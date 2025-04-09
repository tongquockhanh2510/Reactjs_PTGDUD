import Button from 'react-bootstrap/Button';
import "./Content.css";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Content = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 
    const totalResults = 63; 
    const totalPages = Math.ceil(totalResults / itemsPerPage);
    const [turnover, setTurnover] = useState({ value: 0, change: 0 });
    const [profit, setProfit] = useState({ value: 0, change: 0 });
    const [newCustomers, setNewCustomers] = useState({ value: 0, change: 0 });
    useEffect(() => {
       axios.get('http://localhost:5000/turnover').then(res => {
        setTurnover(res.data);
       })
       axios.get('http://localhost:5000/profit').then(res => {
        setProfit(res.data);
       })
       axios.get('http://localhost:5000/new-customers').then(res => {
        setNewCustomers(res.data);
       })
    }, [])

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const renderPagination = () => {
        const pages = [];
        const maxPagesToShow = 4;
        
    
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={currentPage === i ? 'active' : ''}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        border: '1px solid #ddd',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: currentPage === i ? '#FF4E88' : 'white',
                        color: currentPage === i ? 'white' : 'black'
                    }}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="content w-100 p-4" >
            <div className="d-flex align-items-center">
                <img src="../img/Squares four 1.png" alt="" />
                <h4 className="ms-2">Overview</h4>
            </div>
            <div className="row mt-3">
                <div className="col-4"  >
                    <div className="row p-2 me-1" style={{ backgroundColor: "#FFE2E2", borderRadius: "5px" }} >
                        <div className="col-10">
                            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>Turnover</p>
                            <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}> ${turnover.value.toLocaleString()}</h3>
                            <p> <span className="text-success">{turnover.change}%</span> period of change</p>
                        </div>
                        <div className="col-2 p-1">
                            <img src="../img/Button 1509.png" alt="" style={{ width: "35px" }} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row p-2 me-1" style={{ backgroundColor: "#F2F9FF", borderRadius: "5px" }} >
                        <div className="col-10">
                            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>Frofit</p>
                            <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}> ${profit.value.toLocaleString()}</h3>
                            <p> <span className="text-success">{profit.change}%</span> period of change</p>
                        </div>
                        <div className="col-2 p-1">
                            <img src="../img/Button 1529.png" alt="" style={{ width: "35px" }} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row p-2 " style={{ backgroundColor: "#F2F9FF", borderRadius: "5px" }} >
                        <div className="col-10">
                            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>New Customer</p>
                            <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}> ${newCustomers.value.toLocaleString()}</h3>
                            <p> <span className="text-success">{newCustomers.change}%</span> period of change</p>
                        </div>
                        <div className="col-2 p-1">
                            <img src="../img/Button 1530.png" alt="" style={{ width: "35px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center"> <img src="../img/File text 1.png" alt="" />
                    <h4 className="ms-2">Detais report</h4></div>
                <div className="d-flex align-items-center">
                    <button style={{ backgroundColor: "#FBF6E9", border: "1px solid #FF4E88", borderRadius: "5px", color: "#FF4E88", marginRight: "10px" }}><img src="../img/Download.png" alt="" className='p-1' />import</button>
                    <button style={{ backgroundColor: "#FBF6E9", border: "1px solid #FF4E88", borderRadius: "5px", color: "#FF4E88" }}><img src="../img/Move up.png" alt="" className='p-1' />export</button>
                </div>

            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <table className='table ' style={{ border: "1px solid #DCD7D7", borderRadius: "10px" }}>
                        <thead >
                            <tr style={{ background: "#F2F9FF !important" }}>
                                <th><input type="checkbox" /></th>
                                <th>CUSTOMER NAME</th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>John Doe</td>
                                <td>Company A</td>
                                <td>$1000</td>
                                <td>2023-01-01</td>
                                <td>Active</td>
                                <td><img src="../img/create.png" alt="" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <p>63 results</p>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            borderRadius: '4px'
                        }}
                    >
                        &lt;
                    </button>
                    {renderPagination()}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            borderRadius: '4px'
                        }}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Content;
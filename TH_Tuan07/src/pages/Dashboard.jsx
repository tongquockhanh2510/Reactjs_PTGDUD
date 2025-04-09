import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./Content.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [turnover, setTurnover] = useState({ value: 0, change: 0 });
    const [profit, setProfit] = useState({ value: 0, change: 0 });
    const [newCustomers, setNewCustomers] = useState({ value: 0, change: 0 });
    const [customers, setCustomers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [turnoverRes, profitRes, newCustomersRes, customersRes] = await Promise.all([
                    axios.get('http://localhost:5000/turnover'),
                    axios.get('http://localhost:5000/profit'),
                    axios.get('http://localhost:5000/new-customers'),
                    axios.get('http://localhost:5000/customers')
                ]);

                setTurnover(turnoverRes.data);
                setProfit(profitRes.data);
                setNewCustomers(newCustomersRes.data);
                setCustomers(customersRes.data);
                setTotalResults(customersRes.data.length);
                setTotalPages(Math.ceil(customersRes.data.length / itemsPerPage));
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Không thể tải dữ liệu. Vui lòng thử lại.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEditClick = (customer) => {
        

        setSelectedCustomer(customer);
        setFormData({
            name: customer.name,
            company: customer.company,
            orderValue: customer.orderValue,
            orderDate: customer.orderDate,
            status: customer.status
        });
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            // Chuyển đổi định dạng ngày từ yyyy-mm-dd sang dd/mm/yyyy
            const [year, month, day] = formData.orderDate.split('-');
            const formattedDate = `${day}/${month}/${year}`;

            const updatedCustomer = {
                ...selectedCustomer,
                ...formData,
                orderDate: formattedDate
            };

            await axios.put(`http://localhost:5000/customers/${selectedCustomer.id}`, updatedCustomer);
            setCustomers(customers.map(customer =>
                customer.id === selectedCustomer.id ? updatedCustomer : customer
            ));
            setShowModal(false);
        } catch (error) {
            console.error('Error updating customer:', error);
            alert('Không thể cập nhật khách hàng. Vui lòng thử lại.');
        }
    };

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

        if (startPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={currentPage === 1 ? 'active' : ''}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        border: '1px solid #ddd',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: currentPage === 1 ? '#FF4E88' : 'white',
                        color: currentPage === 1 ? 'white' : 'black'
                    }}
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(<span key="ellipsis1">...</span>);
            }
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

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="ellipsis2">...</span>);
            }
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={currentPage === totalPages ? 'active' : ''}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        border: '1px solid #ddd',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: currentPage === totalPages ? '#FF4E88' : 'white',
                        color: currentPage === totalPages ? 'white' : 'black'
                    }}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = customers.slice(startIndex, endIndex);

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="content w-100 p-4">
            <div className="d-flex align-items-center">
                <img src="../img/Squares four 1.png" alt="" />
                <h4 className="ms-2">Overview</h4>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <div className="row p-2 me-1" style={{ backgroundColor: "#FFE2E2", borderRadius: "5px" }}>
                        <div className="col-10">
                            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>Turnover</p>
                            <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>${turnover.value.toLocaleString()}</h3>
                            <p><span className="text-success">{turnover.change}%</span> period of change</p>
                        </div>
                        <div className="col-2 p-1">
                            <img src="../img/Button 1509.png" alt="" style={{ width: "35px" }} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row p-2 me-1" style={{ backgroundColor: "#F2F9FF", borderRadius: "5px" }}>
                        <div className="col-10">
                            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>Profit</p>
                            <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>${profit.value.toLocaleString()}</h3>
                            <p><span className="text-success">{profit.change}%</span> period of change</p>
                        </div>
                        <div className="col-2 p-1">
                            <img src="../img/Button 1529.png" alt="" style={{ width: "35px" }} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row p-2" style={{ backgroundColor: "#F2F9FF", borderRadius: "5px" }}>
                        <div className="col-10">
                            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>New Customer</p>
                            <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>{newCustomers.value.toLocaleString()}</h3>
                            <p><span className="text-success">{newCustomers.change}%</span> period of change</p>
                        </div>
                        <div className="col-2 p-1">
                            <img src="../img/Button 1530.png" alt="" style={{ width: "35px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center">
                    <img src="../img/File text 1.png" alt="" />
                    <h4 className="ms-2">Detailed Report</h4>
                </div>
                <div className="d-flex align-items-center">
                    <button style={{ backgroundColor: "#FBF6E9", border: "1px solid #FF4E88", borderRadius: "5px", color: "#FF4E88", marginRight: "10px" }}>
                        <img src="../img/Download.png" alt="" className='p-1' />import
                    </button>
                    <button style={{ backgroundColor: "#FBF6E9", border: "1px solid #FF4E88", borderRadius: "5px", color: "#FF4E88" }}>
                        <img src="../img/Move up.png" alt="" className='p-1' />export
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <table className='table' style={{ border: "1px solid #DCD7D7", borderRadius: "10px" }}>
                        <thead>
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
                            {currentData.map(customer => (
                                <tr key={customer.id}>
                                    <td><input type="checkbox" /></td>
                                    <td>{customer.name}</td>
                                    <td>{customer.company}</td>
                                    <td>${customer.orderValue}</td>
                                    <td>{customer.orderDate}</td>
                                    <td>
                                        <span
                                            style={{
                                                backgroundColor:
                                                    customer.status === 'New'
                                                        ? '#e6f0fa'
                                                        : customer.status === 'in-progress'
                                                        ? '#fff3cd'
                                                        : '#d4edda',
                                                padding: '5px 10px',
                                                borderRadius: '12px',
                                            }}
                                        >
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td>
                                        <img
                                            src="../img/create.png"
                                            alt="Edit"
                                            onClick={() => handleEditClick(customer)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <p>{totalResults} results</p>
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

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Order Value</Form.Label>
                            <Form.Control
                                type="number"
                                name="orderValue"
                                value={formData.orderValue}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Order Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="orderDate"
                                value={formData.orderDate}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                            >
                                <option value="New">New</option>
                                <option value="in-progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave} style={{ backgroundColor: '#FF4E88', border: 'none' }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Dashboard;
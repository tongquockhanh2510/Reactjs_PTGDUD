import React from "react";
import './contact.css'
class Contact extends React.Component {

    render() {
        return <>
            <div className="contact">
                <div>
                    <h1>{this.props.contactDetail.firstName}</h1>
                    <h3>{this.props.contactDetail.lastName}</h3>
                </div>
                <div>
                    <p>Phone: {this.props.contactDetail.phone}</p>
                </div>
                <div>
                    <p>Address: {this.props.contactDetail.address}</p>
                </div>
                <div className="div-detele">
                    <button onClick={() =>{this.props.handleDelete(this.props.contactDetail.id)}}>Delete</button>
                </div>
            </div>
        </>
    }
}

export default Contact
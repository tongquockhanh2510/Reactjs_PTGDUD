import React from "react";
import './Contact.css'

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
            </div>
        </>
    }
}

export default Contact
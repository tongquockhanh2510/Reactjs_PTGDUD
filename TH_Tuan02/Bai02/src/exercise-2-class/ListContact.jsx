import React from "react";
import Contact from "./Contact";
import "./ListContact.css";

class ListContact extends React.Component {
    render() {
        return <>
            <div className="list-contact">
                {this.props.listContact.map((contact) => {
                    return <Contact contactDetail={contact}></Contact>
                })}
            </div>

        </>
    }
}

export default ListContact
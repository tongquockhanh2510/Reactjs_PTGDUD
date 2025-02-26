import React from "react";
import Contact from "./Contact";
import "./ListContact.css"

class ListContact extends React.Component {
    render() {
        return <>
            <div className="list-contact">
                {this.props.listContact.map((contact) => {
                    return <Contact contactDetail={contact} handleDelete={this.props.handleDelete} key={contact.id}></Contact>
                })}
            </div>
            <div className="div-detele">
                <button onClick={() => {this.props.handleDeleteAll()}}>Delete all</button>
            </div>
        </>
    }
}

export default ListContact
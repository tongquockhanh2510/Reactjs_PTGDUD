import React from "react";
import AddUserInfor from "./AddUserInfor"
import DisplayInfor from "./DisplayInfor"
class Mycomponent extends React.Component{
    state ={
        listUser :[
            {id:1,Name:"Dung",Age:49},
            {id: 2, Name: "Hoang", Age: 12},
            {id: 3, Name: "Chien", Age: 32},
        ], 
        isShowListUser:true
    }
    handleAddnewUser= (userObject)=>{
        this.setState({
            listUser:[userObject, ... this.state.listUser]
        })
    }
    handleDeleteUser =(userID)=>{
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item=> item.id!==userID)
        this.setState({
            listUser:listUserClone
        })
    }
    handleShowListUser =()=>{
        this.setState({isShowListUser:! this.state.isShowListUser})
    }
    render(){
        return(
            <div>
                
                <AddUserInfor handleAddnewUser= {this.handleAddnewUser}></AddUserInfor>
                <button onClick={this.handleShowListUser}>{this.state.isShowListUser?"Hide list user":"Show list user"}</button>
                <br />
                <div>{this.state.isShowListUser&&<DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}></DisplayInfor>}</div>
                
                
            </div>
        )
    }
}
export default Mycomponent
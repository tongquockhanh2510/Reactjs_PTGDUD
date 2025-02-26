import React from "react";
class DisplayInfor extends React.Component{
    render(){
        const{listUser,handleDeleteUser} = this.props;
        console.log(listUser)
        return(
            <div>
                {listUser.map((user) =>{
                    return(
                        <div key={user.id} className={user.Age<18 ? "red":"blue"}>
                            <div>My name is: {user.Name}</div>
                            <div>My Age :{user.Age}</div>
                            <button onClick={()=>{this.props.handleDeleteUser(user.id)}} className="butonDelete">Delete</button>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfor
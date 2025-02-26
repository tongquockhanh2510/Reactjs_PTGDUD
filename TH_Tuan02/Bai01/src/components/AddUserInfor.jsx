import React from "react";
class AddUserInfor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Age:""
        }
    }
    handleOnChangInput= (event,field)=>{
        this.setState({
            [field]:event.target.value
        })
    }
    handleOnSubmit = (event)=>{
        event.preventDefault();
        this.props.handleAddnewUser({
            id:Math.floor((Math.random()*100)+1)+"user",
            Name: this.state.Name,
            Age: this.state.Age
        })
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleOnSubmit}>
            <label htmlFor="" style={{display: "inline-block",width:"80px"}}>My name:</label>
            <input onChange={(event)=>this.handleOnChangInput(event,"Name")} value={this.state.Name} type="text" />
            <br />
            <label htmlFor="" style={{display: "inline-block",width:"80px"}}>Age :</label>
            <input onChange={(event)=>this.handleOnChangInput(event,"Age")} value={this.state.Age} type="text" />
            <br />
            <button style={{backgroundColor:"blue", color:"white"}}>Submit</button>
        </form>
        <br />
            </div>
        
    );
    }
}
export default AddUserInfor
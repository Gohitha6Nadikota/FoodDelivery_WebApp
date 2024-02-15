import React from "react";

class User extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            count:0,
            count1:1
        }
    }
    render()
    {
        const {name,place,contact}=this.props;
        return (
            <div className="User-Container">
                <h1>Count:{this.state.count}</h1>
                <h1>Count1:{this.state.count1}</h1>
                <h1>Name: {name}</h1>
                <h2>Place: {place}</h2>
                <h3>Contact: {contact}</h3>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Tap me to change Count</button>
                <button onClick={()=>{
                    this.setState({count1:this.state.count1+1})
                }}>Tap me to change Count1</button>
            </div>
        )
    }
}
export default User;
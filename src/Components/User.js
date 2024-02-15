import React from "react";

class User extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            userInfo:{
                name:"Gohi",
                location:"Anakapalle",
            }
        }
    }
    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/Gohitha6Nadikota");
        const json= await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
    }
    render()
    {
        const {name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="User-Container">
                <h1>Name: {name}</h1>
                <h2>Place: {location}</h2>
                <img src={avatar_url}/>
            </div>
        )
    }
}
export default User;
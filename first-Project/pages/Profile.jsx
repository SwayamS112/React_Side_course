import { useEffect } from "react"
function Profile(){

    useEffect(()=>{
console.log("Profile component mounted");

    })

    return(
        <div className="profile">
        <h1>hii</h1>
        </div>
    )
}



export default Profile
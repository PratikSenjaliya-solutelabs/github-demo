import React from 'react';

const UserOutput=(props)=>{
    return(
        <div>
            <p>UserName: {props.userName}</p>
            <p>This Should be Overwritten</p>
        </div>
    )
}

export default UserOutput;
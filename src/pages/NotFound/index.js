import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <center>
            <h1>404!错误</h1>
            <p><Link to="/home">返回首页</Link></p>
        </center>
    )
}


export default NotFound;
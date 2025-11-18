import React from 'react';
import "./Loading.scss";

const Loading = () => {
    return ( 
        <div className="loader">
            <span className="loader__ball loader__ball__1"></span>
            <span className="loader__ball loader__ball__2"></span>
            <span className="loader__ball loader__ball__3"></span>
        </div>
     );
}
 
export default Loading;
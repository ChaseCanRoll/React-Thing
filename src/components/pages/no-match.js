import React from 'react';
import {Link} from "react-router-dom";

export default function() {
    return (
        <div>
            <h1>No match</h1>
            <Link to="/">Return to Monke</Link>
        </div>
    );
}
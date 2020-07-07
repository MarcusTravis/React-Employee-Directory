
import React from "react";

export default function Table(props) {
    return (
        <tr className="text-center h4">
            <td>
                <img src={props.photo} alt="employee" />
            </td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.location}</td>
            <td>{props.dob}</td>
        </tr>
    );
}


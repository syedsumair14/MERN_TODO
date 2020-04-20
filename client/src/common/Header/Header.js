import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <div className="header d-flex justify-content-center head-title">
            {props.head}
        </div>
    )
}

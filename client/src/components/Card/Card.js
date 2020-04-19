import React from 'react'
import './Card.css'
import Button from '../Button/Button'

export default function Card() {
    return (
        <div className="card-wrapper">
            <div className="card-custom">
                <div className="tile">
                    this will be title of todo
           </div>
                <div className="description">
                    this will be description of todo
           </div>
                <div className="d-flex">
                    <Button name="EDIT" />
                    <Button name="DELETE" />
                </div>
            </div>
        </div>
    )
}

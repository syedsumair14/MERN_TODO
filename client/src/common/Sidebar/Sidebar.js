import React from 'react'
import './Sidebar.css'
import { MENU } from './Menu'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <section className="profile_photo">
                <div className="profile-image-wrapper">
                    <img src="/sample.jpg" alt="profile-image" />
                </div>
                <div className="user-name">
                    Syed Sumair
                </div>
            </section>
            <main className="sidebar-content">
                <ul className="option-list">
                    {MENU.map((menu, idx) => <li key={idx}><a href=''>{menu.title}</a></li>)}
                </ul>
            </main>
        </div>
    )
}

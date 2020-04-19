import React from 'react'
import './Sidebar.css'

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
                    <li><a>Some Option</a></li>
                    <li><a>Some Option</a></li>
                    <li><a>Some Option</a></li>
                    <li><a>Some Option</a></li>
                    <li><a>Some Option</a></li>
                </ul>
            </main>
        </div>
    )
}

import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landing-container'>
            <nav>
                <div className='nav-brand'>Namo</div>
                <div className='nav-links'>
                    <div className='nav-item' onClick={() => router("/aljk23")}>Join as Guest</div>
                    <div className='nav-item' onClick={() => router("/auth")}>Register</div>
                    <div className='btn-primary' onClick={() => router("/auth")} role='button'>
                        Login
                    </div>
                </div>
            </nav>

            <div className="landing-content">
                <div className="hero-text">
                    <h1>
                        <span style={{ color: "var(--primary-color)" }}>Connect</span> with your loved ones
                    </h1>
                    <p>Experience crystal clear video calls with zero latency. Distance is just a number when you have Namo.</p>
                    <Link to={"/auth"} className="btn-primary">Get Started</Link>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2667&auto=format&fit=crop" alt="Video Call App Interface" />
                </div>
            </div>
        </div>
    )
}
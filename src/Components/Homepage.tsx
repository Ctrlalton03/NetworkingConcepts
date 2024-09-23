import React from "react";
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home: React.FC = () => {
    return(
        <div className="Home-page">
            <section className="TitleHeader">
                <h1>Network and Communication: First Month of Learning Showcase</h1>
                <p>Welcome to my Showcase of the first month of learning in the Networks and Communication Course.</p>
            </section>
                

            <section className="intro-section">
                <h2>What I Learned</h2>
                <p>This first month has been an enlightening journey into the world of networking. Here are some of the key topics I've explored:</p>
                    <ul>
                    <li><strong>OSI Model:</strong> Understanding the seven layers and their functions.</li>
                    <li><strong>TCP/IP Protocol Suite:</strong> The foundation of internet communication.</li>
                    <li><strong>Network Topologies:</strong> Different layouts and their pros and cons.</li>
                    <li><strong>Subnetting:</strong> Techniques for dividing networks efficiently.</li>
                    <li><strong>Network Security:</strong> Basic principles to safeguard data and resources.</li>
                    </ul>
            </section>

            <section className="visuals-section">
                <h2>Visual Representations</h2>
                <p>Below are some visual aids that helped solidify my understanding of networking concepts:</p>
                <div className="image-gallery">
                    <img src="/Images/OSI-Model.png" alt="OSI Model" />
                    <img src="/Images/TCP-model.png" alt="TCP/IP Model" />
                    <img src="/Images/Network-Visual.png" alt="Network Visual" />
                {/* Add more images as necessary */}
                </div>
            </section>

            <section className="links-section">
                <h2>Explore More</h2>
                <p>Ready to dive deeper into networking concepts or read my reflections? Check out the links below:</p>
                <div className="ExploreBtns">
                    <Link to="/networking-concepts"><button>Networking Concepts</button></Link>
                    <Link to="/reflection"><button>Reflection</button></Link>
                </div>
            </section>

            <footer>
                <p>For any questions or feedback, feel free to reach out!</p>
            </footer>
        </div>

    )
};

export default Home;
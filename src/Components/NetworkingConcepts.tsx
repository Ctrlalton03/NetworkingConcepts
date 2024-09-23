import React from "react";
import '../css/Concepts.css';

const NetworkingConcepts: React.FC = () => {
    return (
      <div className="body">
        <section className="networking-intro">
          <h2>Networking Concepts</h2>
          <p>
            Networking involves the interconnection of multiple devices to share resources and information.
            This section provides an overview of core concepts in computer networking, from the OSI model 
            to IP addressing and subnetting.
          </p>
        </section>
        <br></br>
        <section className="osi-model">
          <h2>OSI Model</h2>
          <p>The OSI Model standarizes network communication into Seven layers:</p>
          <ul>
            <li><strong>Layer 1: Physical</strong> – Transmits raw bitstreams over physical mediums.</li>
            <li><strong>Layer 2: Data Link</strong> – Ensures data transfer between two nodes on the same network.</li>
            <li><strong>Layer 3: Network</strong> – Handles routing of data between different networks.</li>
            <li><strong>Layer 4: Transport</strong> – Ensures complete data transfer through error recovery and flow control.</li>
            <li><strong>Layer 5: Session</strong> – Manages communication sessions between devices.</li>
            <li><strong>Layer 6: Presentation</strong> – Translates data formats for communication compatibility.</li>
            <li><strong>Layer 7: Application</strong> – Interfaces directly with end-user applications.</li>
          </ul>
          <div className="section-image">
            <img src="/Images/OSI-Model.png" alt="OSI Model" />
          </div>
        </section>
        <br></br>
        <section className="tcp-ip-model">
          <h2>TCP/IP Model</h2>
          <p>The TCP/IP Model is the foundational protocol suite for the internet. It includes:</p>
          <ul>
            <li><strong>Application Layer</strong> – Protocols like HTTP, FTP, and SMTP operate here.</li>
            <li><strong>Transport Layer</strong> – Manages end-to-end communication using TCP or UDP.</li>
            <li><strong>Internet Layer</strong> – Handles IP addressing and routing using protocols like IP and ICMP.</li>
            <li><strong>Network Access Layer</strong> – Manages data exchange between the host and the network.</li>
          </ul>
          <div className="section-image">
            <img src="/src/Images/TCP-model.png" alt="TCP/IP Model" />
          </div>
        </section>
        <br></br>
        <section className="ip-addressing">
          <h2>IP Addressing</h2>
          <p>IP addresses uniquely identify devices on a network. Two main versions exist:</p>
          <ul>
            <li><strong>IPv4:</strong> 32-bit addresses, represented as four decimal numbers (e.g., 192.168.1.1).</li>
            <li><strong>IPv6:</strong> 128-bit addresses, written as eight groups of hexadecimal numbers.</li>
          </ul>
          <p>Subnetting divides networks into smaller sub-networks to improve efficiency and security. CIDR (Classless Inter-Domain Routing) is a method for IP address allocation and routing.</p>
          <div className="section-image">
            <img src="/src/Images/ipv4-ipv6.jpg" alt="IpAddressing" />
          </div>
        </section>
        <br></br>
        <section className="network-topologies">
          <h2>Network Topologies</h2>
          <p>Network topology refers to how network devices are arranged. The main types are:</p>
          <ul>
            <li><strong>Bus Topology:</strong> All devices share a common cable.</li>
            <li><strong>Star Topology:</strong> Devices connect to a central hub.</li>
            <li><strong>Ring Topology:</strong> Devices form a closed loop.</li>
            <li><strong>Mesh Topology:</strong> Devices are interconnected for redundancy.</li>
          </ul>
          <div className="section-image">
            <img src="/src/Images/Network-Topology.png" alt="Network Visual" />
          </div>
        </section>
        <br></br>
        <section className="network-protocols">
          <h2>Network Protocols</h2>
          <p>Network protocols are rules that govern data communication between devices. Some important protocols include:</p>
          <ul>
            <li><strong>HTTP:</strong> Transfers hypertext over the web.</li>
            <li><strong>FTP:</strong> Used for file transfers.</li>
            <li><strong>DNS:</strong> Translates domain names into IP addresses.</li>
            <li><strong>DHCP:</strong> Automatically assigns IP addresses to devices.</li>
          </ul>
          <div className="section-image">
            <img src="/src/Images/Network-Protocols.png" alt="Network Protocols" />
          </div>
        </section>
        <br></br>
        <section className="subnetting">
          <h2>Subnetting</h2>
          <p>Subnetting helps break a larger network into smaller subnetworks, improving network management and security.</p>
          <ul>
            <li><strong>Subnet Mask:</strong> Defines the network portion of an IP address (e.g., 255.255.255.0).</li>
            <li><strong>CIDR Notation:</strong> Defines subnets by specifying the number of bits used for the network portion (e.g., 192.168.0.0/24).</li>
          </ul>
          <div className="section-image">
            <img src="/src/Images/Subnetting.png" alt="Subnetting" />
          </div>
        </section>
        <br></br>
      </div>
    );
  };
  
  export default NetworkingConcepts;
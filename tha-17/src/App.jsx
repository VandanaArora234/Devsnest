import React from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Card from "./components/Card"

function App()
{
    return(
        <div className="App">
        <h1 className="heading">
           Choreographers Around the Globe
        </h1>
        <div className="container">
        <Card title="Himanshu Dulani" 
            subtitle="Open Choreography, Hip-Hop"/>
        <Card title="Baily Sok" subtitle="Jazz, Tap, Hip-Hop, Lyrical"/>
        <Card title="Sean Lew" subtitle="Ballet, Contemporary, Jazz, Tap, Lyrical"/>
        <Card title="Raghav Juyal" subtitle="Slow-motion, Lyrical"/>
        <Card title="Kaycee Rice" subtitle="Tap, Hip-Hop"/>
        <Card title="Akansha Sharma" subtitle="Hip-Hop, Bharatnatyam" />
        <Card title="Tanya Bhushan" subtitle="Locking, Popping, Wacking"/>
        <Card title="Ellen and Brian" subtitle="K-pop Choreography"/>
        </div>
        </div>
    );
}

export default App;
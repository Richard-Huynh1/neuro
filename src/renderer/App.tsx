import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { ChatBar } from './components/ChatBar';

function Hello() {
  return (
    <div className="layout-root">
      <NavBar />
      <main className="main-content">
        <div className="Hello">
          <img alt="logo" src="/assets/logo.png" width={30} />
          <div className="heat-circle1" style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', left: '52%', top: '48%', transform: 'translate(-50%, -50%)'}} />
          <div className="heat-circle2" style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', left: '52%', top: '62%', transform: 'translate(-50%, -50%)'}} />
          <div className="heat-circle3" style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', left: '40.5%', top: '48%', transform: 'translate(-50%, -50%)'}} />
          <div className="heat-circle4" style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', left: '40.5%', top: '62%', transform: 'translate(-50%, -50%)'}} />
          <h1>Neuro</h1>
        </div>
        <img alt="pad" src="/assets/PAD.png" width={500} />
      </main>
      <ChatBar />
    </div>
  );
}

export default function App() {
  // Circle elements
  const circles = [
    { className: 'heat-circle1', left: '52%', top: '48%' },
    { className: 'heat-circle2', left: '52%', top: '62%' },
    { className: 'heat-circle3', left: '40.5%', top: '48%' },
    { className: 'heat-circle4', left: '40.5%', top: '62%' },
  ];

  const renderCircles = () => {
    return circles.map((circle, index) => (
      <div key={index} className={circle.className} style={{ borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', left: circle.left, top: circle.top, transform: 'translate(-50%, -50%)' }} />
    ));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

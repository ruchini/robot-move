import React, { useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import NavigatorButtons from "./components/NavigatorButtons";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log the error, e.g., send it to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const App = () => {
  const initialPosition = { x: 0, y: 0 }; // Initial position
  const [position, setPosition] = useState(initialPosition);

  const handleMove = (direction) => {
    const newPosition = { ...position };

    switch (direction) {
      case "N":
        newPosition.y = Math.min(newPosition.y + 1, 4);
        break;
      case "E":
        newPosition.x = Math.min(newPosition.x + 1, 4);
        break;
      case "S":
        newPosition.y = Math.max(newPosition.y - 1, 0);
        break;
      case "W":
        newPosition.x = Math.max(newPosition.x - 1, 0);
        break;
      default:
        break;
    }

    setPosition(newPosition);
  };

  const handleTeleport = (targetPosition) => {
    const distance =
      Math.abs(targetPosition.x - position.x) +
      Math.abs(targetPosition.y - position.y);
    const delay = distance * 100;

    setTimeout(() => {
      setPosition(targetPosition);
    }, delay);
  };

  return (
    <div>
      <h2>Let's Play</h2>
      <ErrorBoundary>
        <Table position={position} onTeleport={handleTeleport} />
        <NavigatorButtons onMove={handleMove} />
      </ErrorBoundary>
    </div>
  );
};

export default App;

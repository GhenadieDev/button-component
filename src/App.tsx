import Button from "./components/Button/Button";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h3 className="title">Buttons</h3>
      <p>three types</p>
      <div className="btn-wrapper">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>
      <p>three sizes</p>
      <div className="btn-wrapper">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <p>four colors</p>
      <div className="btn-wrapper">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">danger</Button>
      </div>
      <p>with icons</p>
      <div className="btn-wrapper">
        <Button
          color="primary"
          icon={<span className="material-icons">face</span>}
          iconPosition="left"
        >
          Primary
        </Button>
        <Button
          color="primary"
          icon={<span className="material-icons">face</span>}
          iconPosition="right"
        >
          Primary
        </Button>
        <Button
          color="primary"
          icon={<span className="material-icons">search</span>}
        >
          Primary
        </Button>
        <Button
          color="primary"
          icon={<span className="material-icons">search</span>}
          iconPosition="right"
        >
          Primary
        </Button>
        <Button
          color="primary"
          icon={<span className="material-icons">home</span>}
        >
          Primary
        </Button>
        <Button
          color="primary"
          icon={<span className="material-icons">home</span>}
          iconPosition="right"
        >
          Primary
        </Button>
      </div>
      <p>disabled button</p>
      <div className="btn-wrapper">
        <Button isDisabled={true}>Disabled</Button>
      </div>
    </div>
  );
}

export default App;

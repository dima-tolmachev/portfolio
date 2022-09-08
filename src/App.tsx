import Projects from './components/Projects/Projects';
import Introduction from './components/Introduction/Introduction';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="full-width content">
        <Introduction />
        <br />
        <div className="full-width">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;

import '../App.scss';
import Projects from '../components/projects/Projects';
import Introduction from '../components/Introduction/Introduction';

const Portfolio = () => {
  return (
    <div className="App">
      <div
        className="content"
        style={{ display: 'flex', gap: '10px', width: '100%' }}
      >
        <Introduction />
        <br />
        <div style={{ width: '100%' }}>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

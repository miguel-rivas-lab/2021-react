// import logo from './logo.svg';
import Column from './components/column.jsx';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/app.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <header>
          <h1>Miguel Rivas</h1>
          <h2>Frontend Developer</h2>
          <select>
            <option value="all">All Project</option>
          </select>
        </header>

        <section>
          <article>
            <row>
              <Column size="50%">
                <h3>Voxel Cube Games</h3>
                <h4>Destapa el Coro</h4>
                <h5><time>2016/JUN/25</time></h5>
                <ul>
                  <li>Pug</li>
                  <li>SASS</li>
                  <li>Adobe Illustrator</li>
                </ul>
                <ul>
                  <li>
                    <btn glyph="codepen" to="#" />
                  </li>
                </ul>
              </Column>
              <Column size="50%">
                
              </Column>
            </row>
          </article>
        </section>

        <footer>
          Miguel Rivas // 2021
        </footer>
    </div>
  );
}

export default App;

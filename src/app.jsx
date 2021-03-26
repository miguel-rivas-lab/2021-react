import React from 'react';
import Row from './components/row.jsx';
import Column from './components/column.jsx';
import Icon from './components/icon.jsx';
import Btn from './components/btn.jsx';
import Image3D from './components/image.jsx';

function App() {
  return (
    <>
      <header>
        <h1>Miguel Rivas</h1>
        <h2>Frontend Developer</h2>
        <select>
          <option value="all">All Project</option>
        </select>
      </header>

      <section>
        <article>
          <Row>
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
                  <Icon glyph="olis" />
                  <Btn glyph="codepen" to="#" />
                </li>
              </ul>
            </Column>
            <Column size="50%">
              <Image3D src="https://via.placeholder.com/1080x1920" size="lg" />
            </Column>
          </Row>
        </article>
      </section>

      <footer>
        Miguel Rivas // 2021
      </footer>
    </>
  );
}

export default App;

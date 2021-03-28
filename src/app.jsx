import React from 'react';
import Row from './components/row.jsx';
import Column from './components/column.jsx';
import Icon from './components/icon.jsx';
import Image3D from './components/image.jsx';
import {projects} from './database';

function App() {

  
  const articles = [];
  for(let [index, project] of projects.entries()){
    let gallery = [];
    let multipleProjects = project.links?.web?.length > 1;
    if(multipleProjects){
      for(let [index3, item] of project.links.web.entries()){
        gallery.push(
          <a href={item} key={`link-${index}-${index3}`} target="_blank" rel="noreferrer">
            <Image3D src="https://via.placeholder.com/300x462" size="sm" />
          </a>
        );
      }
    }

    let codepen = project.links.codepen ? <li><a className="btn icon gravel" target="_blank" href={project.links.codepen}><Icon glyph="codepen" /></a></li> : [];
    let vimeo = project.links.vimeo ? <li><a className="btn icon gravel" target="_blank" href={project.links.vimeo}><Icon glyph="vimeo" /></a></li> : [];
    let github = project.links.github ? <li><a className="btn icon gravel" target="_blank" href={project.links.github}><Icon glyph="github" /></a></li> : [];
    let web = project.links.web ? <li><a className="btn icon gravel" target="_blank" href={project.links.web[0]}><Icon glyph="web" /></a></li> : [];

    let links = [];
    if(codepen || vimeo || github || web) {
      links = [
        <ul className="links">
          {web}
          {github}
          {codepen}
          {vimeo}
        </ul>
      ];
    }

    let skills = [];
    for(let [index2, skill] of project.tools.entries()){
      skills.push(
        <li key={`skill-${index}-${index2}`}>{skill}</li>
      )
    }

    articles.push(
      <article key={`article-${index}`}>
        <Row spacing="100">
          <Column size="45%">
            <h3>{project.client}</h3>
            <h4>{project.title}</h4>
            <h5><time>{project.date}</time></h5>
            <ul className="skills">
              {skills}
            </ul>
            {links}
          </Column>
          <Column size="55%">
            <Image3D src="https://via.placeholder.com/300x462" size="lg" />
          </Column>
        </Row>
        <div className="docs-gallery">
          {gallery}
        </div>
      </article>
    )
  }

  return (
    <>
      <header>
        <div className="container">
          <h1>Miguel Rivas</h1>
          <h2>Frontend Developer</h2>
          {/* <select>
            <option value="all">All Project</option>
          </select> */}
        </div>
      </header>

      <section>
        <div className="container">
          {articles}
        </div>
      </section>

      <footer>
        Miguel Rivas // 2021
      </footer>
    </>
  );
}

export default App;

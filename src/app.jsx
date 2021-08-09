import React from 'react';
import Row from './components/row.jsx';
import Column from './components/column.jsx';
import Icon from './components/icon.jsx';
import Image3D from './components/image.jsx';
import {projects} from './database';

function getImage(client, date, index){
  client = client.replace(/\s/g, '').toLowerCase();
  date = date.replace(/\//g, '');
  return `https://miguel-rivas.github.io/zapp/img/projects/${client}-${date}-${index + 1}.png`;
}

function App() {
  const articles = [];
  for(let [index, project] of projects.entries()){
    let navigation = [];
    if(project.links.web){
      for(let [projectIndex, item] of project.links.web.entries()){
        navigation.push(
          <li key={`link-${index}-${projectIndex}`}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          </li>
        );
      }
    }

    let codepen = project.links.codepen ? <li><a className="btn gravel" target="_blank" href={project.links.codepen}><Icon glyph="codepen" /> Codepen</a></li> : [];
    let vimeo = project.links.vimeo ? <li><a className="btn gravel" target="_blank" href={project.links.vimeo}><Icon glyph="vimeo" /> Vimeo</a></li> : [];
    let github = project.links.github ? <li><a className="btn gravel" target="_blank" href={project.links.github}><Icon glyph="github" /> Github</a></li> : [];

    let links = [];
    if(codepen || vimeo || github) {
      links = [
        <ul className="links">
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
      <Column size="25%">
        <article key={`article-${index}`}>
          <div className="content">
            {/* <Image3D src={getImage(project.client, project.date, 0)} size="lg" /> */}
            <h3>{project.client}</h3>
            <h4>{project.title}</h4>
            <h5><time>{project.date}</time></h5>
            <ul className="skills">
              {skills}
            </ul>
            <hr/>
            <ul className="navigation">
              {navigation}
            </ul>
            {links}
          </div>
          <span className={ project.client[0].toLowerCase() + " bk"}>{project.client[0].toLowerCase()}</span>
        </article>
      </Column>
    )
  }

  return (
    <>
      <header>
        <div className="container">
          <h1>Miguel Rivas</h1>
          <h2>Frontend Developer</h2>
        </div>
      </header>

      <section>
        <div className="container">
          <Row spacing="100">
            {articles}
          </Row>
        </div>
      </section>
    </>
  );
}

export default App;

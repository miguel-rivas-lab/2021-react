import { ReactElement } from "react";
import ScrollArea from '../components/scroll-area';
import Column from "../components/column";
import Row from "../components/row";
import Btn from '../components/btn';
import { all as ProjectsDB } from "../modules/db.js";

function Projects(): ReactElement {
  let projects = [];
  ProjectsDB.forEach((row, index) => {
    let roles = [];
    let tools = [];
    let links = [];

    if(row.links.length){
      row.links.forEach((link, linkIndex) => {
        links.push(
          <li key={`link-${linkIndex}`}>
            <Btn
              tag="a"
              href={link.url}
              value={link.text}
              addClass="fsz"
              color="royal-purple"
            />
          </li>
        );
      });
    } else {
      links.push(
        <li>
          <span className="flat btn md fsz persian-red">No Link</span>
        </li>
      );
    }

    row.roles.forEach((role, roleIndex) => {
      roles.push(
        <span key={`role-${roleIndex}`} className="pill">
          {role}
        </span>
      );
    });

    row.tools.forEach((tool, toolIndex) => {
      tools.push(
        <span key={`tool-${toolIndex}`} className="pill">
          {tool}
        </span>
      );
    });

    projects.push(
      <Row key={`project-${index}`} breakpoint="md" table-element>
        <Column size="1/6" table-element>
          {row.title}
        </Column>
        <Column size="1/8" table-element>
          {row.date}
        </Column>
        <Column size="1/16" table-element>
          {row.type}
        </Column>
        <Column size="1/16" table-element>
          {row.client}
        </Column>
        <Column size="1/16" table-element>
          {row.disabled ? 'true' : 'false'}
        </Column>
        <Column size="1/8">
          {roles}
        </Column>
        <Column size="1/4">
          {tools}
        </Column>
        <Column size="1/7">
          <ul className="navigation">
            {links}
          </ul>
        </Column>
      </Row>
    );
  });
  return (
    <div className="table-body">
      {projects}
    </div>
  );
}

function ServerWorkarea(): ReactElement {
  return (
    <ScrollArea color="royal-purple" addClass="gallery">
      <div className="container">
        <article>
          <h1>Server Data</h1>
          <hr />
          <div className="table">
            <div className="table-head">
              <Row breakpoint="md" table-element>
                <Column size="1/6" table-element>Name</Column>
                <Column size="1/8" table-element>Date</Column>
                <Column size="1/16" table-element>Type</Column>
                <Column size="1/16" table-element>Client</Column>
                <Column size="1/16" table-element>Disabled</Column>
                <Column size="1/8" table-element>Roles</Column>
                <Column size="1/4" table-element>Tools</Column>
                <Column size="1/7" table-element>Links</Column>
              </Row>
            </div>
            <Projects />
          </div>
        </article>
      </div>
    </ScrollArea>
  );
}

export default ServerWorkarea;
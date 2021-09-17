import { ReactElement } from "react";
import ScrollArea from '../components/scroll-area';
import { all as ProjectsDB } from "../modules/db";

function Projects(): ReactElement {
  const projects = [];
  ProjectsDB.forEach((row) => {

    projects.push(
      <tr>
        <td>{row.title}</td>
        <td>{row.date}</td>
        <td>{row.type}</td>
        <td>{row.client}</td>
        <td>{row.disabled ? 'true' : 'false'}</td>
        <td>{row.roles.join(', ')}</td>
        <td>{row.tools.join(', ')}</td>
        <td>{row.links.length}</td>
      </tr>
    );
  });
  return (
    <>
      {projects}
    </>
  );
}

function ServerWorkarea(): ReactElement {
  return (
    <ScrollArea color="royal-purple" addClass="gallery">
      <div className="container">
        <article className="nano-box">
          <h1>Server Data</h1>
          <hr />
          <table className="nano-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Type</th>
                <th>Client</th>
                <th>Disabled</th>
                <th>Roles</th>
                <th>Tools</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              <Projects />
            </tbody>
          </table>

        </article>
      </div>
    </ScrollArea>
  );
}

export default ServerWorkarea;
import { ReactElement } from "react";
import ScrollArea from '../components/scroll-area';
import Btn from '../components/btn';
import Column from "../components/column";
import Row from "../components/row";
import { all as ProjectsDB, users } from "../modules/db.js";
import { db } from "../modules/firebase";

function ServerPanel(): ReactElement {
  return (
    <ScrollArea color="royal-purple">
      <fieldset className="nano-row row-block">
        <Column>
          <legend>Deploy Data</legend>
          <Row>
            <Column>
              <Btn
                color="gold-tips"
                value="Projects"
                onClick={() => {
                  ProjectsDB.forEach(
                    (item, index) => {
                      const i = index < 10 ? `P0${index}` : `P${index}`;
                      db.collection("projects").doc(i).set(item);
                    }
                  );
                }}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Btn
                color="gold-tips"
                value="Users"
                onClick={() => {
                  db.collection('users')
                    .doc("main")
                    .set(users);
                }}
              />
            </Column>
          </Row>
        </Column>
      </fieldset>
    </ScrollArea>
  );
}

export default ServerPanel;
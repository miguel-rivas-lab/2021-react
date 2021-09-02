import { ReactElement } from "react";
import Row from '../components/row';
import Column from '../components/column';
import ScrollArea from '../components/scroll-area';

function Home(): ReactElement {
  return (
    <Row addClass="router-area">
      <Column size="300" addClass="panel">
        <ScrollArea color="royal-purple"></ScrollArea>
      </Column>
      <Column size="100%-300" addClass="workarea">
        <ScrollArea color="royal-purple">

        </ScrollArea>
      </Column>
    </Row>
  );
}

export default Home;
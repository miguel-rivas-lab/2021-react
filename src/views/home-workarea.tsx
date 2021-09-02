import { ReactElement } from "react";
import { useSelector } from 'react-redux';

function HomeWorkarea(): ReactElement {
  const { users } = useSelector((state: any) => state.users);
  return (
    <div>
      <div className="drakkar" />
      <div className="cover" v-if="cover">

        {users &&
          <>
            <h1>
              {users.middleName} {users.lastName}
            </h1>
            <h2>
              {users.title}
            </h2>
          </>
        }
      </div>
    </div>
  );
}

export default HomeWorkarea;
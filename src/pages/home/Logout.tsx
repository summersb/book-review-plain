import * as React from 'react';
import {auth} from "../../api/Firebase";

const Logout = (): JSX.Element => {
  auth.signOut();
  return (
    <div>
      Bye
    </div>
  );
};

export default Logout;
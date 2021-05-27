import * as  React from 'react';

// material
import {Container} from '@material-ui/core';

// components
import {Uploader} from './commons/components/uploader';

// styles
import './App.css';

import {StateInspector} from "reinspect"

const App: React.FC<any> = () => {
  return (
    <>
      <StateInspector name="App">
        <Container fixed>
          <Uploader/>
        </Container>
      </StateInspector>

    </>
  );
}

export default App;

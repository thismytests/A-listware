import * as React from 'react';
import {EventHandler, ChangeEvent} from 'react';
import {Toolbar} from '@material-ui/core';
import Box from '@material-ui/core/Box';

interface Controls {
  onChooseFiles: EventHandler<ChangeEvent<HTMLInputElement>>;
}

export const Controls: React.FC<Controls> = ({children, onChooseFiles}) => {
  return (
    <>
      <Toolbar>
        <Box display='flex' flexGrow={1}>
          {/* whatever is on the left side */}
        </Box>

        <input
          accept='image/*'
          id='photo'
          name='photo'
          type='file'
          multiple={true}
          onChange={onChooseFiles}
        />
      </Toolbar>
    </>
  );
}

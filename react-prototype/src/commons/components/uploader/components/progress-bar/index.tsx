import * as React from 'react';

// components
import {ProgressBarItem} from './components/progress-bar-item/progress-bar-item';

// types
import {IProgressBar} from './components/types';

export const ProgressBar: React.FC<IProgressBar> = ({children, files}) => {
  const listItems = Array.prototype.slice.call(files).map((file, i) => {
      return (<li key={i}>
        {file?.name}
        <ProgressBarItem file={file}></ProgressBarItem>
      </li>)
    }
  );

  return (
    <>
      {listItems.length > 0 && listItems}
    </>
  );
}

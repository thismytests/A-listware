import * as React from 'react';
import {ChangeEvent} from 'react';

import {useState} from 'reinspect'

// material
import {Container} from '@material-ui/core';

// components
import {Controls} from './components/controls';
import {ProgressBar} from './components/progress-bar';


export const Uploader: React.FC<any> = () => {
  const [files, setFiles] = useState<any>({}, 'files');

  // uploaderSendFiles
  const onChooseFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    // todo ... Mykolai Litvin ... will be discussed
    const files: FileList = event.target.files
    setFiles(Array.prototype.slice.call(files));

  };
  return (
    <>
      <Container>
        {/*CONTROLS*/}
        <Controls onChooseFiles={onChooseFiles}/>

        {/*PROGRESS-BAR*/}
        {files?.length > 0 && <ProgressBar files={files}/>}
      </Container>
    </>
  );
}

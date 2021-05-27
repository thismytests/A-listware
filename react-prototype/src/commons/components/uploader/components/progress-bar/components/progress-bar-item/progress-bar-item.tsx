import * as React from 'react';
import {useEffect, useState} from 'react';

// material
import LinearProgress from '@material-ui/core/LinearProgress';

// api
import {uploaderSendFile} from '../../../../../../api/uploader';

export const ProgressBarItem: React.FC<{ file: File }> = ({children, file}) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    uploaderSendFile(file, (data: any) => {
      setPercent(data);
    });


    // eslint-disable-next-line
  }, []);
  // eslint-disable-enabled-line
  return (
    <>
      <LinearProgress variant='determinate' value={percent}/>
    </>
  );
}

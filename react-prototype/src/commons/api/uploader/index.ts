import axios from 'axios';


const host = process.env.REACT_APP_API_HOST;
const port = process.env.REACT_APP_API_PORT;

export const uploaderSendFile = function (file: File, callBack: Function): void {
  const formData = new FormData();
  formData.append('file', file, file.name);

  const url = 'upload';
  const finalUrl = `${host}:${port}/${url}`;

  const config = {
    onUploadProgress: function (progressEvent: any) {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      callBack(percentCompleted)
    }
  }

  axios.post(finalUrl, formData, config);
}

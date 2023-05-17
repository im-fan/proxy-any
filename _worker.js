// export default {
//   async fetch(request, env) {
//     const url = new URL(request.url);
//     // proxy domain
//     //api.openai.com
//     url.host = "chat-gpt-next-web-eight-rose-66.vercel.app";
//     // openai is already set all CORS heasders 
//     return fetch(url, {
//       headers: request.headers,
//       method: request.method,
//       body: request.body,
//       redirect: 'follow'
//     });
//   }
// }


import axios from 'axios';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // proxy domain
    url.host = "chat-gpt-next-web-eight-rose-66.vercel.app";
    // openai is already set all CORS heasders 
    const response = await axios({
      method: request.method,
      url: url.toString(),
      headers: request.headers,
      data: request.body,
      maxRedirects: 0,
      validateStatus: function (status) {
        return status >= 200 && status < 300;
      }
    });
    return {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      body: response.data
    };
  }
}

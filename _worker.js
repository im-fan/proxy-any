export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      // proxy domain
      //api.openai.com
      url.host = "api.openai.com";
      // openai is already set all CORS heasders 
      const response = await fetch(url, {
        headers: request.headers,
        method: request.method,
        body: request.body,
        redirect: 'follow',
        timeout: 10000
      });
      console.log("response==>", response);
      return response;
    } catch (error) {
      console.error(`proxy error: ${error.message}`);
    }
  }
}

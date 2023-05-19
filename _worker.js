export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // proxy domain
    //api.openai.com
    url.host = "chat-gpt-next-web-eight-rose-66.vercel.app";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}

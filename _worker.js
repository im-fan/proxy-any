export default {
    async fetch(request, env) {
        let retryCount = 0;
        let response;
        while (retryCount < 2) {
            try {
                const target = "api.openai.com";
                const url = new URL(url);
                // proxy domain
                //api.openai.com
                // url.host = "api.openai.com";
                // openai is already set all CORS heasders 
                const response = await fetch(url, {
                    headers: request.headers,
                    method: request.method,
                    body: request.body,
                    redirect: 'follow',
                    timeout: 10000
                });
                break;
            } catch (error) {
                console.error(`proxy error: ${error.message}`);
                retryCount++;
            }
        }
        console.log("response==>", response);
        return response;
    }
}

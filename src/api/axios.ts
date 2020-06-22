import axios from 'axios'
import qs from 'qs'
import baseUrl from './baseUrl'




let config:any = {
    baseURL: baseUrl() || "",
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
  };
  
  const _axios:any = axios.create(config);
  
  _axios.interceptors.request.use(
    function(config:any) {
      if(config.method==="post"&&Object.prototype.toString.call(config.data) !== '[object FormData]'){
        config.data = qs.stringify(config.data)
      }
      if(config.method==='get'){
        let date:any = new Date()
        let timestamp:any = Date.parse(date);
        config.url = config.url+'&t='+timestamp
      }
      return config;
    },
    function(error:any) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  _axios.interceptors.response.use(
    function(response:any) {
      // Do something with response data
      return response;
    },
    function(error:any) {
      // Do something with response error
      return Promise.reject(error);
    }
  );
  
export default _axios
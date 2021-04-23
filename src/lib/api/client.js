import axios from 'axios';

const client = axios.create();

const DEBUG = process.env.NODE_ENV === "development";

  // 글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://musia.io/'

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  /**
  // 인터셉터 설정
  */
  axios.interceptors.request.use((config) => {
    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) { console.info("✉️ ", config); }
    return config;
  }, (error) => {
    if (DEBUG) { console.error("✉️ ", error); }
    return Promise.reject(error);
  });

export default client;

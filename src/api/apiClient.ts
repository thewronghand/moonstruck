import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://${
    import.meta.env.VITE_API_REGION
  }-aiplatform.googleapis.com/v1/projects/${
    import.meta.env.VITE_GOOGLE_PROJECT_ID
  }/locations/${import.meta.env.VITE_API_REGION}/publishers/${
    import.meta.env.VITE_API_PUBLISHER
  }/models/${import.meta.env.VITE_API_TARGET_MODEL}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GOOGLE_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default apiClient;

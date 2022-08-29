import { Routes, Route } from "react-router-dom";

import App from "../App";
import VideoListPage from "../routes/VideoListPage";
import VideoReviewPage from "../routes/VideoReviewPage";
import VideoUploadPage from "../routes/VideoUploadPage";
import ResultList from "../routes/ResultList";
import ResultScreen from "../routes/ResultScreen";
import CompleteAlertPage from "../routes/CompleteAlertPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/expert/videos" element={<VideoListPage />} />
      <Route path="/expert/videos/:videoId" element={<VideoReviewPage />} />
      <Route path="/user" element={<VideoUploadPage />} />
      <Route path="/user/complete" element={<CompleteAlertPage />} />
      <Route path="/user/resultList" element={<ResultList />} />
      <Route path="/user/resultList/:videoId" element={<ResultScreen />} />
    </Routes>
  );
}

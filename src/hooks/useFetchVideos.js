import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

// comment 없는 사고 영상 가져오기
export default function useFetchVideos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      const result = [];

      querySnapshot.forEach((doc) => {
        if (hasNoComments(doc.data())) {
          result.push(doc.data());
        }
      });
      setVideos(result);
      setIsLoading(false);
    })();
  }, []);

  const hasNoComments = (video) => {
    return Object.keys(video.comments).length === 0;
  };

  return { videos, isLoading };
}

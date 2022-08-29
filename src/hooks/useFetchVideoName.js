import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase";

export default function useFetchVideoName(videoId) {
  const [videoName, setVideoName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "videos", videoId);
      const docSnap = await getDoc(docRef);

      setVideoName(docSnap.data().name);
      setIsLoading(false);
    })();
  }, []);

  return { videoName, isLoading };
}

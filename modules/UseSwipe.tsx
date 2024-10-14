import { useState } from "react";

const useSwipeVertical = (minSwipeDistance: number = 50) => {
   const [touchStart, setTouchStart] = useState<number | null>(null);
   const [touchEnd, setTouchEnd] = useState<number | null>(null);

   const onTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null); // reset touchEnd to avoid unwanted swipes
      setTouchStart(e.targetTouches[0].clientY); // detect Y position
   };

   const onTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientY); // track the Y movement
   };

   const onTouchEnd = () => {
      if (touchStart === null || touchEnd === null) return;

      const distance = touchStart - touchEnd;
      const isUpSwipe = distance > minSwipeDistance; // swipe up detected
      const isDownSwipe = distance < -minSwipeDistance; // swipe down detected

      if (isUpSwipe || isDownSwipe) {
         return isUpSwipe ? "up" : "down";
      }
      return null;
   };

   return {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
   };
};

export default useSwipeVertical;

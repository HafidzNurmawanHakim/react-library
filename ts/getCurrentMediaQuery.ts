export const getCurrentMediaQuery = (): string => {
   const breakpoints: Record<string, string> = {
      sm: "(max-width: 640px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 1024px)",
      xl: "(max-width: 1280px)",
   };

   for (const breakpoint in breakpoints) {
      if (window.matchMedia(breakpoints[breakpoint]).matches) {
         return breakpoint;
      }
   }

   // If no match is found, return a default value or handle it as needed
   return "unknown";
};

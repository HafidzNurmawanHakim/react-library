export function validateNumber(event: KeyboardEvent) {
   const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "Control",
      "Meta",
   ];

   if (
      allowedKeys.includes(event.key) ||
      (event.key >= "0" && event.key <= "9") ||
      (event.key >= "Numpad0" && event.key <= "Numpad9")
   ) {
      // Allow the key press
      return;
   }

   // Prevent the key press
   event.preventDefault();
}

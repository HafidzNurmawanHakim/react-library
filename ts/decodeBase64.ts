/**
 * Decodes a Base64 encoded string to a UTF-8 string.
 * @param base64 - The Base64 encoded string.
 * @returns The decoded UTF-8 string or null if decoding fails.
 */
export function decodeBase64(base64: string): string | null {
   try {
      // Decode the Base64 string to a binary string
      const binaryString = atob(base64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);

      for (let i = 0; i < len; i++) {
         bytes[i] = binaryString.charCodeAt(i);
      }

      // Decode the byte array to a UTF-8 string
      const decoder = new TextDecoder();

      return decoder.decode(bytes);
   } catch (error) {
      console.error("Failed to decode Base64 string: " + error);

      return null;
   }
}

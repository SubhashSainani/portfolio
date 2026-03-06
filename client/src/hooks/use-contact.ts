import { useMutation } from "@tanstack/react-query";
import type { InsertContactMessage } from "@shared/schema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // For a static site, we can't send a POST request to a backend server.
      // Instead, we open the user's default email client pre-filled with the message.
      const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);

      // Hardcoded destination email (could be passed in, but hardcoding for simplicity here)
      const destinationEmail = "subhashsainani4@gmail.com";

      window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;

      // Simulate a quick network delay so the toast shows up nicely
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true };
    }
  });
}

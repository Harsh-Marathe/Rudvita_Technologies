import emailjs from "@emailjs/browser";

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
}

export const sendEmail = async (
  payload: EmailPayload
): Promise<EmailResponse> => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false };
  }
};

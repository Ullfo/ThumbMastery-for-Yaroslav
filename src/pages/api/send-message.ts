import type { NextApiRequest, NextApiResponse } from "next";

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;

export class TelegramAPI {
   public static sendMessage = async (message: string): Promise<void> => {
      try {
         const response = await fetch(
            `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  chat_id: TG_CHAT_ID,
                  text: message,
               }),
            }
         );

         const data = await response.json();
         console.log("Telegram API Response ALALALLALALAL:", data);
      } catch (error) {
         console.error(error);
      }
   };
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

   const { message } = req.body;

   try {
      await TelegramAPI.sendMessage(message);
      return res.status(200).json({
         success: `TG_BOT_TOKEN:${TG_BOT_TOKEN} , TG_CHAT_ID:${TG_CHAT_ID} `,
      });
   } catch (error) {
      return res.status(500).json(error);
   }
}

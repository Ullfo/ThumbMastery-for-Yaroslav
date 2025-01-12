class TelegramAPI {
   private static botToken = "7733461863:AAENgSMIUYZsKgmxZD4PRgL2LASue5L4zh4"; // Замінити на токен бота
   private static chatId = "768861809"; // Замінити на ID чату

   public static sendMessege = async (message: string): Promise<void> => {
      const response = await fetch(
         `https://api.telegram.org/bot${TelegramAPI.botToken}/sendMessage`,
         {
            method: "POST", // Метод POST
            headers: {
               "Content-Type": "application/json", // Вказуємо формат JSON
            },

            body: JSON.stringify({
               chat_id: TelegramAPI.chatId,
               text: message,
            }),
         }
      );
   };
}

export default TelegramAPI;

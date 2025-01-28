import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import AppModal from "@/components/AppModal/AppModal";
import AppButton from "@/components/AppButton/AppButton";
import AppSelectDropdown, {
   Option,
} from "@/components/AppSelectDropdown/AppSelectDropdown";
import AppInput from "@/components/AppInput/AppInput";
import AppRadioSelect from "@/components/AppRadioSelect/AppRadioSelect";
import HeartIcon from "@/assets/icons/heart.svg";

type HomeModalProps = {
   visible: boolean;
   onClose: () => void;
};

type inputType = "radio" | "dropdown" | "text" | "textarea" | "phone";

type mainData = {
   id: string;
   type: inputType;
   name?: string;
   ranges?: (string | Option)[];
   placeHolder?: string;
};

type CountryType = {
   name: { common: string };
   flags?: { png: string };
};

const HomeModal: React.FC<HomeModalProps> = ({ visible, onClose }) => {
   const [inputAnswers, setInputAnswers] = useState<string[]>(
      Array(12).fill("")
   );
   const [errors, setErrors] = useState<boolean[]>([]);
   const [ending, setEnding] = useState<boolean>(false);
   const [countries, setCountries] = useState<
      { label: string; flag?: string }[]
   >([]);

   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

   const mainData: mainData[] = [
      {
         id: "1",
         type: "radio",
         name: "Do you create long-form videos on YouTube?",
         ranges: ["Yes", "No"],
      },
      {
         id: "2",
         type: "radio",
         name: "How many subscribers do you have?",
         ranges: [
            "0 - 25,000",
            "25,000 - 100,000",
            "100,000 - 500,000",
            "500,000 - 1 million",
            "1 million - 2.5 million",
            "2.5 million +",
         ],
      },
      {
         id: "3",
         type: "radio",
         name: "How long have you been creating long-form videos?",
         ranges: [
            "Less than 1 year",
            "1-2 years",
            "2-5 years",
            "5-10 years",
            "10+ years",
         ],
      },
      {
         id: "4",
         type: "dropdown",
         name: "Do you own a business? If yes, which of the following best describes it?",
         ranges: [
            { label: "No, I don’t" },
            { label: "Yes, agency" },
            { label: "Yes, podcast" },
            { label: "Yes, e-commerce" },
            { label: "Yes, software" },
            { label: "Yes, entertainment" },
            { label: "Yes, consulting/coaching" },
            { label: "Yes, brick & mortar" },
            { label: "Yes, other" },
         ],
      },
      {
         id: "5",
         type: "dropdown",
         name: "Do you sell or offer a product or community to your audience?",
         ranges: [
            { label: "No, I don’t" },
            { label: "Yes, product" },
            { label: "Yes, course" },
            { label: "Yes, community" },
            { label: "Yes, coaching" },
            { label: "Yes, other" },
         ],
      },
      {
         id: "6",
         type: "text",
         name: "What is your YouTube channel called?",
      },
      {
         id: "7",
         type: "textarea",
         name: "In a few words, what is your channel about?",
      },
      {
         id: "8",
         type: "dropdown",
         name: "What country do you live in?",
         ranges: countries,
      },
      {
         id: "9",
         type: "text",
         name: "What’s your name?",
         placeHolder: "First name",
      },
      {
         id: "10",
         type: "text",
         placeHolder: "Last name",
      },
      {
         id: "11",
         type: "phone",
         name: "What’s your phone number?",
      },
      {
         id: "12",
         type: "text",
         name: "What’s your email?",
      },
   ];

   const sendToTelegram = (): void => {
      const validateErrors = mainData.map((item, index) => {
         return !inputAnswers[index]?.trim();
      });

      setErrors(validateErrors);

      const hasEmptyFields = validateErrors.some((error) => error);

      if (hasEmptyFields) return;

      const message = mainData
         .map((item, index) => {
            const questionName = item.name || `What's your last name?`;
            return `${index + 1}) ${questionName}:\n - ${inputAnswers[index]}`;
         })
         .join("\n\n");

      fetch("/api/send-message", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ message: message }),
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error("Failed to send message");
            }
            setEnding(true);
         })
         .catch(() => console.log("Failed"));
   };

   const handleChanger = (index: number, value: string): void => {
      setInputAnswers((prev) => ({
         ...prev,
         [index]: value,
      }));

      setErrors((prev) => ({
         ...prev,
         [index]: !value.trim(),
      }));
   };

   const handleClose = (index: number): void => {
      setOpenDropdown((prev) => (prev === index ? null : index));
   };

   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((response) => response.json())
         .then((data: CountryType[]) => {
            const filteredCountries = data
               .map((country) => ({
                  label: country.name.common,
                  flag: country.flags?.png,
               }))
               .sort((a, b) => a.label.localeCompare(b.label));
            setCountries(filteredCountries);
         })
         .catch((error) => console.error(error));
   }, []);

   useEffect(() => {
      if (visible) {
         return document.body.classList.add("overflow-hidden");
      }
      return document.body.classList.remove("overflow-hidden");
   }, [visible]);

   if (ending) {
      return (
         <AppModal width="1120px" visible={visible} onClose={onClose}>
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-7 mb-14 sm:mb-28">
               <HeartIcon className="size-36 sm:size-[300px] -mb-4 sm:-mb-9" />
               <h3 className="text-b1 sm:text-h3 font-bold">
                  Thank You for Applying!
               </h3>
               <h4 className="text-center text-overline2 sm:text-h4 text-gray-600 max-w-[750px]">
                  Your application has been received. We’ll review your
                  submission and reach out if an enrollment spot is available
                  and you qualify to work with us.
               </h4>
            </div>
         </AppModal>
      );
   }

   return (
      <AppModal width="1120px" visible={visible} onClose={onClose}>
         <h3 className="text-center sm:text-h3 text-b1 font-bold mb-1 sm:mb-4">
            Apply Now to Work With Us
         </h3>
         <h4 className="text-center sm:text-h4 text-overline2 text-grey--600 bottom-3 mb-3 sm:mb-6">
            See If You Qualify and Join Our Waitlist
         </h4>

         <div className="flex flex-col items-center max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="left-20 space-y-5 text-start mb-7">
               {mainData.map((question, index) => (
                  <React.Fragment key={question.id}>
                     {question.type === "radio" && (
                        <AppRadioSelect
                           name={question.name!}
                           ranges={question.ranges as string[]}
                           selectedValue={inputAnswers[index]}
                           onChange={(value) => handleChanger(index, value)}
                           error={errors[index]}
                        />
                     )}

                     {question.type === "dropdown" && (
                        <AppSelectDropdown
                           label={question.name}
                           width="280px"
                           value={inputAnswers[index]}
                           options={question.ranges as Option[]}
                           onSelect={(value) => handleChanger(index, value)}
                           isOpen={openDropdown === index}
                           onClose={() => handleClose(index)}
                           error={errors[index]}
                        />
                     )}

                     {(question.type === "text" ||
                        question.type === "textarea") && (
                        <AppInput
                           label={question.name}
                           value={inputAnswers[index]}
                           onChange={(e) =>
                              handleChanger(index, e.target.value)
                           }
                           width="280px"
                           height={question.type === "text" ? "30px" : "80px"}
                           textarea={question.type === "textarea"}
                           placeholder={question.placeHolder}
                           error={errors[index]}
                        />
                     )}

                     {question.type === "phone" && (
                        <div>
                           <h5>{question.name}</h5>
                           <PhoneInput
                              country={"us"}
                              excludeCountries={["ru"]}
                              enableSearch
                              value={inputAnswers[index]}
                              onChange={(value) => handleChanger(index, value)}
                              inputStyle={{
                                 border: errors[index]
                                    ? "1px solid #ce1821"
                                    : "1px solid #00d3ff",
                                 borderRadius: "4px",
                                 width: "280px",
                                 height: "35px",
                              }}
                              buttonStyle={{
                                 border: errors[index]
                                    ? "1px solid #ce1821"
                                    : "1px solid #00d3ff",
                                 borderRadius: "4px 0 0 4px",
                              }}
                              dropdownStyle={{
                                 border: "1px solid #C6FCFF",
                                 borderRadius: "4px",
                                 maxWidth: "280px",
                                 maxHeight: "190px",
                              }}
                              searchStyle={{
                                 border: "1px solid #ddd",
                                 borderRadius: "4px",
                              }}
                           />
                           {errors[index] && (
                              <p className="px-5 text-overline1 text-error--600">
                                 please enter a phone number
                              </p>
                           )}
                        </div>
                     )}
                  </React.Fragment>
               ))}

               <div className="flex items-center gap-2">
                  <input
                     className="size-[18px] sm:size-5"
                     name="checkbox"
                     type="checkbox"
                  />
                  <label
                     htmlFor="checkbox"
                     className="text-overline1 sm:text-b1"
                  >
                     I agree to the processing of personal data.
                  </label>
               </div>
            </div>

            <AppButton
               onClick={sendToTelegram}
               className="w-[150px] md:w-[300px]"
            >
               APPLY
            </AppButton>
         </div>
      </AppModal>
   );
};

export default HomeModal;

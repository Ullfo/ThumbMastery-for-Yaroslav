import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";

const PageFooter: React.FC = () => {
   const tabs = [
      { name: "TESTIMONIALS" },
      { name: "SERVICES" },
      { name: "PORTFOLIO" },
      { name: "ABOUT US" },
      { name: "FAQ" },
   ];

   return (
      <footer className="flex items-center justify-between py-9">
         <Link href="/">
            <Image src={Logo} alt="Logo" width={230} height={65} />
         </Link>

         <nav className="flex gap-2 bg-primary--50 rounded-[28px] py-2">
            {tabs.map((tab) => (
               <Link className="px-5 py-2" href="/">
                  {tab.name}
               </Link>
            ))}
         </nav>
      </footer>
   );
};

export default PageFooter;

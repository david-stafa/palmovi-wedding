"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const ClipboardButton = ({ emails }: { emails: string[] }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = async () => {
    setIsLoading(true);
    const emailList = emails.join(", ");
    const type = "text/plain";
    const clipboardItemData = {
      [type]: emailList,
    };
    const clipboardItem = new ClipboardItem(clipboardItemData);

    try {
      await navigator.clipboard.write([clipboardItem]);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`${isCopied ? "bg-green-500 hover:bg-green-600" : "bg-black hover:bg-gray-800"}`}
      disabled={isLoading}
    >
      {isLoading ? "Kopíruju..." : isCopied ? "Zkopírováno" : "Emaily ctrl+c"}
    </Button>
  );
};

export default ClipboardButton;

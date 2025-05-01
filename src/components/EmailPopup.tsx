
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Mail } from "lucide-react";

interface EmailPopupProps {
  email: string;
}

const EmailPopup = ({ email }: EmailPopupProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <a className="text-white hover:text-secondary transition-colors flex items-center cursor-pointer">
          <Mail className="w-6 h-6 mr-2" />
          <span className="hidden md:inline">Email</span>
        </a>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3 bg-white shadow-lg rounded-md border border-gray-200">
        <div className="text-primary font-medium">{email}</div>
      </PopoverContent>
    </Popover>
  );
};

export default EmailPopup;

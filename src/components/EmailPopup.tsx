
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopupProps {
  content: string;
  url?: string;
  icon: React.ReactNode;
  label?: string;
}

const ContactPopup = ({ content, url, icon, label }: PopupProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="text-white hover:text-highlight-light transition-colors flex items-center gap-2 cursor-pointer">
          {icon}
          <span className="hidden md:inline">{label}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3 bg-white shadow-lg rounded-md border border-highlight">
        <div className="text-primary font-medium">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              {content}
            </a>
          ) : (
            content
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactPopup;

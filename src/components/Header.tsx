
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('request-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-primary text-xl font-bold">Find4Staff</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

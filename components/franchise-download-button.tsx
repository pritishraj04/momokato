"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FRANCHISE_CONFIG, hasFranchiseDocument } from "@/lib/franchise-config";

export function FranchiseDownloadButton() {
  if (!hasFranchiseDocument()) {
    return null; // Hide button if no document is available
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = FRANCHISE_CONFIG.DOCUMENT_URL!;
    link.download = FRANCHISE_CONFIG.DOCUMENT_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="bg-white hover:bg-orange-50 text-orange-600 hover:text-orange-700 border-2 border-orange-600 font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 btn-animate relative z-30"
    >
      <Download className="mr-2 h-5 w-5" />
      Download {FRANCHISE_CONFIG.DOCUMENT_NAME}
    </Button>
  );
}

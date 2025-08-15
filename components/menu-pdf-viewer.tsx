"use client";

import { Download, Maximize } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMenuViewer } from "@/components/menu-viewer-provider";

export function MenuPdfViewer() {
  const { openViewer } = useMenuViewer();

  const menuImage = "/images/menu-preview.png";

  const handleViewMenu = () => {
    openViewer(menuImage);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = menuImage;
    link.download = "momo-kato-menu.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-6 flex-col md:flex-row">
      {/* Primary Action Button */}
      <Button
        onClick={handleViewMenu}
        className="bg-white hover:bg-orange-50 text-orange-600 hover:text-orange-700 border-2 border-orange-600 font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Maximize className="mr-3 h-7 w-7" />
        View Full Menu
      </Button>

      {/* Secondary Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button
          variant="outline"
          onClick={handleDownload}
          className="bg-white hover:bg-orange-50 text-orange-600 hover:text-orange-700 border-2 border-orange-600 font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Menu
        </Button>
      </div>
    </div>
  );
}

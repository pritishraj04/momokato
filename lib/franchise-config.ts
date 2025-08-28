// Franchise configuration
export const FRANCHISE_CONFIG = {
  // Set to null or empty string to hide the download button
  DOCUMENT_URL: "/documents/momo-kato-franchise-brochure.pdf", // Change to null to hide button
  DOCUMENT_NAME: "Franchise Brochure",

  // Franchise image
  FRANCHISE_IMAGE: "/placeholder.svg?height=400&width=600",
  FRANCHISE_IMAGE_ALT:
    "Momo Kato Franchise Opportunity - Join Our Growing Family",
};

// Helper function to check if franchise document is available
export const hasFranchiseDocument = (): boolean => {
  return !!(
    FRANCHISE_CONFIG.DOCUMENT_URL && FRANCHISE_CONFIG.DOCUMENT_URL.trim()
  );
};

// Get franchise document download link
export const getFranchiseDocumentUrl = (): string | null => {
  return hasFranchiseDocument() ? FRANCHISE_CONFIG.DOCUMENT_URL : null;
};

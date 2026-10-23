export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  crop: { x: number; y: number; width: number; height: number };
}

// Original files are preserved. Crops only control CSS presentation.
export const media = {
  portrait: { src: '/images/jm-niroshan-profile.png', alt: 'JM Niroshan, wearing glasses and a white shirt', width: 1920, height: 1080, crop: { x: 783, y: 251, width: 355, height: 355 } },
  govcare: { src: '/images/govcare-dashboard.png', alt: 'Supplied GovCare development screenshot showing the administrative activity dashboard; displayed figures are unverified', width: 1920, height: 1080, crop: { x: 0, y: 33, width: 1920, height: 997 } },
  insuredrive: { src: '/images/insuredrive-sign-in.jpeg', alt: 'InsureDrive sign-in screen with biometric, password, and account-switching options', width: 716, height: 1599, crop: { x: 0, y: 72, width: 716, height: 1451 } },
  tailorpro: { src: '/images/tailorpro-sign-in.jpeg', alt: 'TailorPro ERP sign-in screen with email, password, and fingerprint entry controls', width: 716, height: 1599, crop: { x: 0, y: 72, width: 716, height: 1451 } },
  fihst: { src: '/images/fihst-inventory.jpeg', alt: 'FIHST Students’ Union inventory dashboard with equipment cards and Dashboard, Scan, Inventory, and History navigation', width: 716, height: 1599, crop: { x: 0, y: 72, width: 716, height: 1451 } },
} satisfies Record<string, PortfolioImage>;

export const screenshotCopy = {
  govcare: { label: 'ADMINISTRATIVE WORKSPACE', title: 'GovCare', detail: 'An overview of hospital activity and operational workflows.', caption: 'Supplied development screenshot. On-screen figures and institution labels are not verified deployment or impact claims.' },
  insuredrive: { label: 'ACCOUNT ACCESS', title: 'A clear way in.', detail: 'Biometric and password entry options in the supplied InsureDrive interface.', caption: 'Supplied interface screenshot. A mobile-sized view does not establish a released native app or verified biometric integration.' },
  fihst: { label: 'INVENTORY AT A GLANCE', title: 'Items. Status. Next steps.', detail: 'Equipment availability and a direct path to scan, inventory, and history.', caption: 'Supplied interface screenshot. Displayed equipment counts are not independently verified operational metrics.' },
} as const;

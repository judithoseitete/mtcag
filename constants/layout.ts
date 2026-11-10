export const LAYOUT = {
  header: {
    height: {
      mobile: "4rem", // h-16
      desktop: "5rem", // h-20
    },
    zIndex: 50,
  },
  mobileMenu: {
    width: "16rem", // w-64
    zIndex: 50,
  },
  overlay: {
    zIndex: 40,
  },
} as const;

export type LayoutConfig = typeof LAYOUT;

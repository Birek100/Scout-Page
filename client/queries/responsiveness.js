const MOBILE_BREAKPOINT = 745;

export const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

export const isDesktop = () => window.innerWidth > MOBILE_BREAKPOINT;

/// <reference types="vite/client" />
interface Window {
  showIframe: (elementId: string) => void;
  testOuterLib: () => void;
  showEnv: () => void;
}

declare global {
  var window: Window;
}

interface ImportMetaEnv {
  VITE_ENV: string;
  VITE_BASE_URL: string;
}

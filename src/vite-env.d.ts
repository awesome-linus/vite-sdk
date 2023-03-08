/// <reference types="vite/client" />
  interface Window {
	showIframe: (elementId: string) => void
  testOuterLib: () => void
  }
  
  declare global {
	var window: Window
  }

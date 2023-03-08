/// <reference types="vite/client" />
  interface Window {
	showIframe: (elementId: string) => void
  }
  
  declare global {
	var window: Window
  }

/// <reference types="vite/client" />
export {};

declare global {
  interface Window {
    phantom: any
    solana: any
  }
}
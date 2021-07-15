export const WelcomeServer = "Welcome";

export interface WelcomeServer {
  say(): Promise<string>;
}

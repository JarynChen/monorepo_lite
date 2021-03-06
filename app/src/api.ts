import { Controller, Get } from "@malagu/mvc/lib/node";
import { WelcomeServer } from "@app/welcome";
import { Autorpc } from "@malagu/rpc";

@Controller()
export class ApiController {
  @Autorpc("http://localhost:3000/api/Welcome")
  readonly welcomeServer: WelcomeServer;
  @Get()
  async say(): Promise<any> {
    return await this.welcomeServer.say();
  }
}

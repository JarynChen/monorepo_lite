import { Controller, Get } from "@malagu/mvc/lib/node";
import { WelcomeServer } from "@app/welcome";
import { Autorpc } from "@malagu/rpc";

@Controller()
export class PositionApiController {
  @Autorpc("http://localhost:3000/api/Welcome")
  readonly welcomeServer: WelcomeServer;
  @Get()
  async updatePosition(): Promise<any> {
    return await this.welcomeServer.say();
  }
}

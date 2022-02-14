import { Inject, NgModule } from "@angular/core"
import {
  ServerModule,
  ServerTransferStateModule,
} from "@angular/platform-server"

import { AppModule } from "./app.module"
import { AppComponent } from "./app.component"
//import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader"

import { REQUEST } from "@nguniversal/express-engine/tokens"
import { APP_BASE_HREF } from "@angular/common"
import { environment } from "../environments/environment"

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    //ModuleMapLoaderModule,
    ServerTransferStateModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.appUrl + "/" }],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(/*@Inject(REQUEST) private request*/) {}
}

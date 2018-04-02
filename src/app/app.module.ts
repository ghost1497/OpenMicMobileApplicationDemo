import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { Items } from '../mocks/providers/items';
import { Api } from '../providers/api/api';
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule,
  NavController
} from "ionic-angular";
import { WelcomePageModule } from "../pages/welcome/welcome.module";
import { SearchPageModule } from "../pages/search/search.module";
import { MyApp } from "./app.component";
import { SearchProvider } from '../providers/search/search';


@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    WelcomePageModule,
    SearchPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    Api,
    Items,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SearchProvider
  ]
})
export class AppModule {}

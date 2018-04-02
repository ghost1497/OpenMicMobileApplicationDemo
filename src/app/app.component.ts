import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = FirstRunPage;
  constructor(platform: Platform, private statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    });
  }
}

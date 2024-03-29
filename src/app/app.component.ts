import { TabsPage } from './../pages/tabs/tabs.page';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
    template: `<ion-menu [content]="content" side="left" id="menu1">
    <ib-page-nearby> </ib-page-nearby>
    </ion-menu>
    <ion-menu [content]="content" side="right" id="menu2">
    <ib-page-beers> </ib-page-beers>
    </ion-menu>
    <ion-nav #content [root]="rootPage"></ion-nav>`,
})
export class MyApp {
    rootPage = LoginPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}

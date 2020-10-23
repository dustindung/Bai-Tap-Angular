import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { BaiTap8Component } from './bai-tap8/bai-tap8.component';
import { SoDoGheNgoiComponent } from './bai-tap8/so-do-ghe-ngoi/so-do-ghe-ngoi.component';
import { DanhSachGheDaDatComponent } from './bai-tap8/danh-sach-ghe-da-dat/danh-sach-ghe-da-dat.component';
import { BaiTapAngularBuoi3Component } from './bai-tap-angular-buoi3/bai-tap-angular-buoi3.component';

@NgModule({
  declarations: [
    AppComponent,
    BaiTap8Component,
    SoDoGheNgoiComponent,
    DanhSachGheDaDatComponent,
    BaiTapAngularBuoi3Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

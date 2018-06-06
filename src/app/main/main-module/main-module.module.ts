import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from '../main.component';
import { PingMainComponent } from '../ping-main/ping-main.component';
import { DiscoMainComponent } from '../disco-main/disco-main.component';
import { CarpetaMainComponent } from '../carpeta-main/carpeta-main.component';
import {GeneralComponent} from '../../general/general.component';
import { AppRoutingModule} from '../../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    PingMainComponent,
    DiscoMainComponent,
    CarpetaMainComponent,
    GeneralComponent
  ]
})
export class MainModuleModule { }

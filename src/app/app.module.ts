import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { PingService } from './shared/ping.service';
import { HttpClientModule } from '@angular/common/http';
import { DiscosService } from './shared/discos.service';
import { CarpetasService } from './shared/carpetas.service';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { PingComponent } from './ping/ping.component';
import { DiscosComponent } from './discos/discos.component';
import { CarpetasComponent } from './carpetas/carpetas.component';
import { LoginComponent } from './login/login.component';
import { MainModuleModule } from './main/main-module/main-module.module';
import {LoginService} from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PingComponent,
    DiscosComponent,
    CarpetasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MainModuleModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    PingService,
    DiscosService,
    CarpetasService,
    LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

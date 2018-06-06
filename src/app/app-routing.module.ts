import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PingComponent} from './ping/ping.component';
import {DiscosComponent} from './discos/discos.component';
import {CarpetasComponent} from './carpetas/carpetas.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {GeneralComponent} from './general/general.component';

const routes: Routes = [
  {path: 'ping', component: PingComponent},
  {path: 'discos', component: DiscosComponent},
  {path: 'carpetas', component: CarpetasComponent},
  {path: 'Home', component: MainComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'app', component: AppComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'DashBoard', component: GeneralComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

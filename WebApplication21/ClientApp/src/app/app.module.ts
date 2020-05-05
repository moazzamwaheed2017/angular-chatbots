import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { menuConf } from './menu.conf';
import { CoreModule } from './core/core.module';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from 'angular-admin-lte';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { DialogComponent } from './+dialog/dialog.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './+register/register.component';
import { ChatComponent } from './+chat/chat.component';
import { ChatService } from './core/services/chat/chat.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,   
    DialogComponent,
    ChatComponent  
  ],  
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    ReactiveFormsModule,
    CoreModule,
    FormsModule,  
    HttpModule,   
    BrowserAnimationsModule,  
    LayoutModule.forRoot(menuConf),
    LoadingPageModule, MaterialBarModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

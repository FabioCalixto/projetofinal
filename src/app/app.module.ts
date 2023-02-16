import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { DefaultLayoutComponent } from './containers'



const APP_CONTAINERS = [
    DefaultLayoutComponent
  ];

@NgModule({
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        HomeComponent,
        RegisterComponent
       
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

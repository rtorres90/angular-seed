import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {AppComponent}        from './app.component';
import {ThingService}         from './services/thing.service';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {ThingsComponent} from "./thing/things.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        ThingsComponent
    ],
    providers: [
        ThingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

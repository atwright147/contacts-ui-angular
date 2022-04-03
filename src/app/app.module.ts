import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { CustomErrorHandler } from './shared/error-handler/error-handler';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { BoolPipe, LengthPipe, NegatePipe, TrueOrNullPipe } from './pipes';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsListComponent,
    NavComponent,
    ContactsComponent,
    ContactDetailsComponent,
    BoolPipe,
    LengthPipe,
    NegatePipe,
    TrueOrNullPipe,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    ...materialModules,
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }

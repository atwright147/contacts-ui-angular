import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgJoinPipeModule } from 'angular-pipes';
import { NgConditionModule } from 'ng-condition';

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
import { InputComponent } from './components/fields/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactDetailsItemComponent } from './components/contact-details-item/contact-details-item.component';
import { PrefixPipe } from './pipes/prefix/prefix.pipe';
import { ErrorsComponent } from './components/errors/errors.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import { ContactsEditComponent } from './pages/contacts-edit/contacts-edit.component';

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
    InputComponent,
    ButtonComponent,
    ContactDetailsItemComponent,
    PrefixPipe,
    ErrorsComponent,
    ContextMenuComponent,
    ClickOutsideDirective,
    ContactsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgJoinPipeModule,
    NgConditionModule,
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

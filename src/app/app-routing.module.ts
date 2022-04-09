import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: ComingSoonComponent },
  { path: 'calls', component: ComingSoonComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'calendar', component: ComingSoonComponent },
  { path: 'settings', component: ComingSoonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

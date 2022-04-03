import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

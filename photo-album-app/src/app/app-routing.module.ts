// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component'; // Import the PhotoListComponent

const routes: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' }, // Redirect empty path to /photos
  { path: 'photos', component: PhotoListComponent }, // Route to PhotoListComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

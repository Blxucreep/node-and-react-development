import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonEditFormComponent } from "./lesson-edit-form/lesson-edit-form.component";

const routes: Routes = [
  { path:'lesson-edit-form', component: LessonEditFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
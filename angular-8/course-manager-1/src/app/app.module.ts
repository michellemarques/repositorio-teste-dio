import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './start/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent, 
    Error404Component
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([ /* rotas nativas */
      {
        path:'', redirectTo: 'courses', pathMatch: 'full'  /* path: '' = raiz */
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component /* path: '**' = qdo ñ encontra rota*/
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

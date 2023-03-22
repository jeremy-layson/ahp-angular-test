import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FooComponent } from './pages/foo/foo.component';
import { BarComponent } from './pages/bar/bar.component';

const routes: Routes = [
  {
    title: 'Homepage',
    path: '',
    component: HomeComponent
  },
  {
    title: 'Foo Page',
    path: 'foo',
    component: FooComponent
  },
  {
    title: 'Bar Page',
    path: 'bar',
    component: BarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

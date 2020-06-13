import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyskillPage } from './myskill.page';

const routes: Routes = [
  {
    path: '',
    component: MyskillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyskillPageRoutingModule {}

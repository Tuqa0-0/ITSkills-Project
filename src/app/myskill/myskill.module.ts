import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyskillPageRoutingModule } from './myskill-routing.module';

import { MyskillPage } from './myskill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyskillPageRoutingModule
  ],
  declarations: [MyskillPage]
})
export class MyskillPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { TablerosComponent } from './tableros.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TablerosRoutingModule } from './tableros.routes';
//graficos
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [TablerosComponent,
    BarchartComponent,
    PiechartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    NgSelectModule,
    FormsModule,
    TablerosRoutingModule
  ]
})
export class TablerosModule { }

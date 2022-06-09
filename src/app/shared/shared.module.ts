import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search-pipe/search-pipe.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectPipe } from './pipes/region-filter-pipe/region-filter-pipe.component'



@NgModule({
  declarations: [
    SearchPipe,
    DropDownComponent,
    SelectPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    SearchPipe,
    DropDownComponent,
    SelectPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowseByComponent } from './browse-by.component';
import { ThemedBrowseByComponent } from './themed-browse-by.component';
import { CommonModule } from '@angular/common';
import { ResultsBackButtonModule } from '../results-back-button/results-back-button.module';

const DECLARATIONS = [
  BrowseByComponent,
  ThemedBrowseByComponent,
];

@NgModule({
    imports: [
        ResultsBackButtonModule,
        CommonModule,
        ...DECLARATIONS,
    ],
    exports: [
      ...DECLARATIONS,
    ]
})
export class SharedBrowseByModule { }

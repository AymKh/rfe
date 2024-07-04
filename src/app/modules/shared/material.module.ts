import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CUSTOM IMPORTS
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class MaterialModule { }

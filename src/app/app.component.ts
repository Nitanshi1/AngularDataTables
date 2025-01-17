import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataComponent } from './data/data.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DataComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-data-tables';
}

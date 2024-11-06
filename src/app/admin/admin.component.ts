import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '../shared/_dashboard.scss']
})
export class AdminComponent {

}

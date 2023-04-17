import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  value: string = '';
  constructor(private router: Router, private srv: LibraryService) {}

  clickEvent(value: string) {
    this.value = value;
    this.router.navigateByUrl('/trending');
    this.srv.test = value;
  }
}

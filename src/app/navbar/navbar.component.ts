import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;

    console.log(this.searchText);
  }

  @Output() parentFuction: EventEmitter<any> = new EventEmitter();
  constructor(private query: LibraryService) {}

  ngOnInit(): void {
    this.parentFuction.emit(this.searchText);
    this.query.y = 'harrypotter';
  }
}

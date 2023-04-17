import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private srv: LibraryService) {}

  ngOnInit(): void {}

  queryData: string = '';
  enteredSearchedValue: string = ''; //variable to store the value searched
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>(); //instantiated event emitter class

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchedValue); //emit method will raise this event
  }

  submitSearch(value: string) {
    this.srv.data1 = value;
  }
}

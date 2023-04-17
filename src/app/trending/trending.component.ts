import { Component } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  newdata: any;

  ty: any;
  constructor(private _library: LibraryService) {}

  ngOnInit() {
    this._library.getSubData().subscribe((data) => {
      this.newdata = data;
      this.ty = this.newdata.works;
    });
  }

  page = 10;

  handlePageChange(event: number) {
    this.page = event;
  }
}

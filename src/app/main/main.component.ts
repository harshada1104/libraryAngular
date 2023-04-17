import { Component } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  newdata: any;

  ty: any;
  constructor(private _library: LibraryService) {}

  ngOnInit() {
    this._library.getdata().subscribe((data) => {
      this.newdata = data;
      this.ty = this.newdata.docs;
      console.log(this.ty);
    });
  }

  ngAfterContentChecked() {
    this._library.getdata().subscribe((data) => {
      this.newdata = data;
      this.ty = this.newdata.docs;
      console.log(this.ty);
    });
  }

  page = 1;

  handlePageChange(event: number) {
    this.page = event;
  }
}

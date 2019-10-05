import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
}

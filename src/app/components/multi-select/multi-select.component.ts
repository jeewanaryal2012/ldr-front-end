import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() dataList: any;
  showClickedList = false;
  showAllList = false;

  selectedItems = [];

  constructor() { }

  ngOnInit() {
    console.log(this.dataList);
  }

  clickableClicked(e) {
    //console.log('clickableClicked');
    this.showAllList = !this.showAllList;
  }

  clicedListClicked(e) {
    //console.log('clicedListClicked');
  }

  allListClicked(e) {
    //console.log('allListClicked');
  }

  itemClicked(e, l, chk) {
    if (chk === true) {
      this.selectedItems.push(l);
    } else {
      this.selectedItems = this.selectedItems.filter((value, index, arr) => {
        return value !== l;
      });

    }

    console.log(l, chk, this.selectedItems);
    this.selectedItems = Array.from(new Set(this.selectedItems));

    if (this.selectedItems.length > 0) {
      this.showClickedList = true;
    }
  }

}

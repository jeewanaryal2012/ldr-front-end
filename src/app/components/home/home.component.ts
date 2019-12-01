import { Component, OnInit } from '@angular/core';
import { BaseApiService } from "../../services/base-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _api: BaseApiService) { }

  ngOnInit() {
    this._api.get('/users').subscribe(res => {
      console.log(res);
    }, err => { });
  }

}

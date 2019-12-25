import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseApiService } from "../../services/base-api.service";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  otp: string;
  showOtpComponent = true;
  //@ViewChild('ngOtpInput') ngOtpInput: any;

  constructor(private _api: BaseApiService, private fb: FormBuilder) { }

  // ngOnInit() {
  //   this._api.get('/users').subscribe(res => {
  //     console.log(res);
  //   }, err => { });
  // }

  myForm: FormGroup;

  beCall = "";

  ngOnInit() {
    this.myForm = this.fb.group({
      input1: [],
      input2: [],
      input3: [],
      input4: [],
      input5: [],
      input6: [],
      input7: [],
      input8: [],
      input9: []
    });
  }

  config = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    inputStyles: {
      // 'width': '50px',
      // 'height': '50px',
      // 'pointer-events': 'none',
      //'border': '2px solid #c0c0c0'
    }
  };
  onOtpChange(otp) {
    console.log(otp);
    this.otp = otp;
    if (otp.length === this.config.length) {
      this.beCall = otp;
      this.config.inputStyles = {
        'pointer-events': 'none'
      };
      setTimeout(() => {
        this.config.inputStyles = {
          'pointer-events': 'initial'
        };
        this.beCall = '';
      }, 5000);
    }
  }

  setVal(val) {
    //this.ngOtpInput.setValue('');
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  inputKeydown(e, inp) {
    console.log(e, inp);
  }

  onSubmit(form: FormGroup) {
    console.log(this.myForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
//import { fabric } from 'fabric';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class LoginRegisterComponent implements OnInit {
  isOpen = true;
  canvas: any;
  scale = 100;
  img: any;

  constructor() {
    // fabric.Image.fromURL('https://www.freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png', (img) => {
    //   this.img = img;
    // });
  }

  ngOnInit() {
    //this.canvas = new fabric.Canvas('canvas');
    // setInterval(() => {
    //   this.increaseImage('');
    // }, 100);
  }

  increaseImage(e) {
    this.canvas.clear();
    this.scale = this.scale < 150 ? this.scale + 10 : 100;
    this.img.scaleToWidth(this.scale);
    this.canvas.add(this.img);
  }
  decreaseImage(e) {
    this.canvas.clear();
    this.scale -= 10;
    this.img.scaleToWidth(this.scale);
    this.canvas.add(this.img);
  }
  rotateImage(e) {
    this.canvas.clear();
    this.scale += 10;
    this.img.scaleToWidth(100);
    this.img.rotate(this.scale);
    this.canvas.add(this.img);
  }



  toggle() {
    this.isOpen = !this.isOpen;
  }

}

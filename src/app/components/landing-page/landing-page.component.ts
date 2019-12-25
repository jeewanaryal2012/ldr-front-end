import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  dataList: any;

  constructor() { }

  ngOnInit() {
    this.dataList = [
      ['tesla', 'toyota', 'honda', 'bmw'],
      ['apple', 'banana', 'peach', 'carrot'],
      ['football', 'hockey', 'tennis', 'na']
    ];
  }

  keyPressed(e, k) {
    console.log(k);
    //this.playAudio(k);
  }

  // async playAudio(k) {
  //   let audio = new Audio(`../../../assets/sounds/s${k}.mp3`);
  //   audio.type = 'audio/wav';

  //   try {
  //     await audio.play();
  //     console.log('Playing...');
  //   } catch (err) {
  //     //console.log('Failed to play...' + error);
  //   }
  // }

}

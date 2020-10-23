import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-so-do-ghe-ngoi',
  templateUrl: './so-do-ghe-ngoi.component.html',
  styleUrls: ['./so-do-ghe-ngoi.component.sass']
})
export class SoDoGheNgoiComponent implements OnInit {

  @Input() gheNgoiArray;

  @Output() chonGheEvent = new EventEmitter;

  mangGheDuocChonButton:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  nhanChonGhe(ghe: any){
    this.chonGheEvent.emit(ghe);
    // console.log('ghe',ghe)
    this.mangGheDuocChonButton.push(ghe);
    console.log(this.mangGheDuocChonButton)
  }

}

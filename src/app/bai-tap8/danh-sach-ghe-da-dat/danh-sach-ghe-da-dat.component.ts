import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe-da-dat',
  templateUrl: './danh-sach-ghe-da-dat.component.html',
  styleUrls: ['./danh-sach-ghe-da-dat.component.sass']
})
export class DanhSachGheDaDatComponent implements OnInit, DoCheck {

  @Input() selectedGhe;

  @Output() gheMuonHuy = new EventEmitter;


  tongTien: number;

  constructor() { }

  ngOnInit(): void {

  }

  chonGheHuy(ghe) {
    this.gheMuonHuy.emit(ghe);
  }

  ngDoCheck() {
    this.tongTien = this.selectedGhe.reduce((tt, item, index) => {
      return tt += item.Gia;
    }, 0)
  }
}

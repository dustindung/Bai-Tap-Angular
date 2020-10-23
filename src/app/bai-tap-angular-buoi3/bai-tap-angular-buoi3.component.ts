import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-angular-buoi3',
  templateUrl: './bai-tap-angular-buoi3.component.html',
  styleUrls: ['./bai-tap-angular-buoi3.component.sass']
})
export class BaiTapAngularBuoi3Component implements OnInit, DoCheck, OnChanges, AfterContentChecked {

  phoneList = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://drop.ndtv.com/TECH/product_database/images/430201460025PM_635_oppo_r1_ndtv.jpeg',
      description: 'Sản phẩm của china',
      price: 450,
      invetory: 10,
      rating: 3,
      soLuong: 1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      image: 'https://images-na.ssl-images-amazon.com/images/I/711mxjaZbGL._AC_SL1500_.jpg',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      invetory: 15,
      rating: 5,
      soLuong: 1,
    }, {
      id: 3,
      name: 'Iphone XS',
      image: 'https://www.xtmobile.vn/vnt_upload/product/11_2018/thumbs/600_xs_max_gold_800x800_6.jpg',
      description: 'Sản phẩm của US',
      price: 600,
      invetory: 20,
      rating: 4,
      soLuong: 1,
    }
  ];

  phoneSelected = [
  ];

  sortSanPhamTheoTen() {
    this.phoneList.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
  }

  themSanPhamVaoGioHang(selectedPhone) {
    const themSanPhamIndex = this.phoneSelected.findIndex((item) => item.id === selectedPhone.id);

    if(themSanPhamIndex === -1 ){
      this.phoneSelected.push(selectedPhone);
    } 
    else {
      this.phoneSelected[themSanPhamIndex].soLuong += 1;
    }

  }

  tangSanPham(selectedPhone){
    const SanPhamIndex = this.phoneSelected.findIndex((item) => item.id === selectedPhone.id);
    this.phoneSelected[SanPhamIndex].soLuong += 1;
  }

  giamSanPham(selectedPhone){
    const SanPhamIndex = this.phoneSelected.findIndex((item) => item.id === selectedPhone.id);
    this.phoneSelected[SanPhamIndex].soLuong -= 1;
    
    if(this.phoneSelected[SanPhamIndex].soLuong === 0){
      this.phoneSelected.splice(SanPhamIndex, 1)
    }
  }

  xoaSanPham(selectedPhone){
    const SanPhamIndex = this.phoneSelected.findIndex((item) => item.id === selectedPhone.id);
    console.log(SanPhamIndex)
    this.phoneSelected.splice(SanPhamIndex,1)
  }

  tongTien: number;

  constructor() { }

  ngOnInit(): void {
  }

  

  ngDoCheck(){
    this.tongTien = this.phoneSelected.reduce((tt,item,index)=>{
      return tt += ( item.price * item.soLuong )
    },0)
    localStorage.setItem('phoneSelected',JSON.stringify((this.phoneSelected)))
    
  }

  ngOnChanges(){
    
  }

  ngAfterContentChecked(){
    

  }

  xoaHetSanPham(){
    const mangRong = [];
    this.phoneSelected = mangRong;
  }

}

import { Component, OnInit, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface Element {
  slNo: number;
  orderNo: number;
  lineItemNo: number;
  materialCode: string;
  materialDesc: string;
  dqty: number;
  diQty: number;
  bQty: number;
}

const ELEMENT_DATA: Element[] = [
  {
    slNo: 1,
    orderNo: 1,
    lineItemNo: 7,
    materialCode: 'abc@12',
    materialDesc: 'materialDesc',
    dqty: 6,
    diQty: 4,
    bQty: 3,
  },
  {
    slNo: 2,
    orderNo: 76,
    lineItemNo: 8,
    materialCode: 'bc@12',
    materialDesc: 'materialDesc1',
    dqty: 5,
    diQty: 3,
    bQty: 5,
  },
  {
    slNo: 3,
    orderNo: 45,
    lineItemNo: 5,
    materialCode: '123@',
    materialDesc: 'materialDesc2',
    dqty: 2,
    diQty: 4,
    bQty: 5,
  },
  {
    slNo: 4,
    orderNo: 34,
    lineItemNo: 3,
    materialCode: '124#2',
    materialDesc: 'materialDesc3',
    dqty: 1,
    diQty: 65,
    bQty: 31,
  },
  {
    slNo: 5,
    orderNo: 12,
    lineItemNo: 2,
    materialCode: 'ahyy@34',
    materialDesc: 'materialDesc4',
    dqty: 56,
    diQty: 14,
    bQty: 32,
  },
  {
    slNo: 6,
    orderNo: 33,
    lineItemNo: 11,
    materialCode: '22334&&',
    materialDesc: 'materialDesc5',
    dqty: 60,
    diQty: 24,
    bQty: 13,
  },
  {
    slNo: 7,
    orderNo: 98,
    lineItemNo: 17,
    materialCode: 'JJJ666$',
    materialDesc: 'materialDesc6',
    dqty: 78,
    diQty: 32,
    bQty: 87,
  },
  {
    slNo: 8,
    orderNo: 31,
    lineItemNo: 10,
    materialCode: '@1133',
    materialDesc: 'materialDesc7',
    dqty: 12,
    diQty: 10,
    bQty: 6,
  },
  {
    slNo: 9,
    orderNo: 89,
    lineItemNo: 19,
    materialCode: '(88wq',
    materialDesc: 'materialDesc8',
    dqty: 7,
    diQty: 7,
    bQty: 2,
  },
];

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css'],
})
export class DeliveryOrderComponent implements OnInit {
  

  selectedValue: string = 'pizza-1';
  dispatchDate: Date = new Date();
  transporter: string|null = '1';
  lineItemDqty: number = 1;
  lineItemMaterialCode: string = '';
  vendorCode:string |null = '';
  orderNumber:number|null = 1;

  displayedColumns = [
    'slNo',
    'orderNo',
    'lineItemNo',
    'materialCode',
    'materialDesc',
    'dqty',
    'diQty',
    'bQty',
    'actions',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private router:Router) {}
  modify = true;
  ngOnInit(): void {
    this.vendorCode = localStorage.getItem('vendorCode');
    this.orderNumber = Number(localStorage.getItem('orderNumber'));
    this.transporter = localStorage.getItem('transporter');
  }

  modifyOrder() {
    this.modify = false;
    console.log("dispatchDate = "+this.dispatchDate+" Transporter = "+this.transporter+" Vendor Code = "+this.vendorCode+" Order Number = "+this.orderNumber);
    console.log(this.transporter);
    
  }
  saveOrder() {
    this.modify = true;
    console.log("dispatchDate = "+this.dispatchDate+" Transporter = "+this.transporter+" Vendor Code = "+this.vendorCode+" Order Number = "+this.orderNumber);
    console.log(this.transporter);
  }
  addLineItem(materialCode: string, dqty: number) {
    console.log(this.lineItemDqty);
    console.log(this.lineItemMaterialCode);
    const addNew = {
      slNo: Math.random(),
      orderNo: 89,
      lineItemNo: 19,
      materialCode: materialCode,
      materialDesc: 'materialDesc8',
      dqty: dqty,
      diQty: 7,
      bQty: 2,
    };
    const element = this.dataSource.filteredData;
    element.push(addNew);
    this.dataSource = new MatTableDataSource<Element>(element);
  }
  modifySingleLine(value: Element) {
    console.log(value);
  }
  deleteSingleLine(value: Element) {
    console.log(value);
    const data = this.removeObjectWithId(
      this.dataSource.filteredData,
      value.slNo
    );
    this.dataSource = new MatTableDataSource<Element>(data);
  }
  removeObjectWithId(arr: Element[], id: number) {
    const objWithIdIndex = arr.findIndex((obj) => obj.slNo === id);
    arr.splice(objWithIdIndex, 1);

    return arr;
  }
  close() {
    this.router.navigateByUrl('delivery-order')
  }
}

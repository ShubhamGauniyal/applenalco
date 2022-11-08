import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


export interface Element {
  deliverydate: string;
  position: number;
  orderno: number;
  vendorcode: string;
  vendorname: string;
  route:string;
  transporter:string;
  status:string;
  doqty:number;
  diqty:number;
  balqty:number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, deliverydate: 'Hydrogen', orderno: 1.0079, vendorcode: 'H',vendorname:'eska',route:'alaska',transporter:'ddl',status:'sent',doqty:1,
  diqty:2,
  balqty:3},
  {position: 2, deliverydate: 'drogen', orderno: 1.79, vendorcode: 'G',vendorname:'albama',route:'albama',transporter:'ddc',status:'loading',doqty:1,
  diqty:2,
  balqty:3},
 
];
@Component({
  selector: 'app-schedule-delivery-list',
  templateUrl: './schedule-delivery-list.component.html',
  styleUrls: ['./schedule-delivery-list.component.css']
})
export class ScheduleDeliveryListComponent implements OnInit {
  defaultView = true
  selectedValue: string = 'pizza-1';
  dispatchDate: Date = new Date();
  transporter: string = '1';
  lineItemDqty: number = 1;
  lineItemMaterialCode: string = '';
  vendorCode:string = '';
  orderNumber:number = 1;
  demoForm: FormGroup;
  dispatchDateValue = new FormControl("", [Validators.required]);
  transpoterValue = new FormControl("",[Validators.required]);
  vendorcodeValue = new FormControl("",[Validators.required]);
  ordernumberValue = new FormControl("",[Validators.required]);
  
  displayedColumns = ['position', 'deliverydate', 'orderno', 'vendorcode','route','transporter','status','doqty','diqty','balqty','select'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  
  constructor(private route:Router) {
    this.demoForm = new FormGroup({
      dispatchDateValue: this.dispatchDateValue,
      transpoterValue: this.transpoterValue,
      vendorcodeValue: this.vendorcodeValue,
      ordernumberValue: this.ordernumberValue
    });
   }

  ngOnInit(): void {
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.demoForm.controls[controlName].hasError(errorName);
  };
  search(){
    console.log("dispatchDate = "+this.dispatchDate+" Transporter = "+this.transporter+" Vendor Code = "+this.vendorCode+" Order Number = "+this.orderNumber);
    console.log(this.transporter);
    localStorage.setItem('dispatchDate',this.dispatchDate.toString());
    localStorage.setItem('transporter',this.transporter);
    localStorage.setItem('vendorCode',this.vendorCode);
    localStorage.setItem('orderNumber',this.orderNumber.toString());
  }

  getRowData(event: Event){
console.log(event,'myevent');
this.route.navigateByUrl('delivery-order-modify');
  }
}
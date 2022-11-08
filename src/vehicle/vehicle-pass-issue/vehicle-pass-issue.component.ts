import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-vehicle-pass-issue',
  templateUrl: './vehicle-pass-issue.component.html',
  styleUrls: ['./vehicle-pass-issue.component.css']
})

export class VehiclePassIssueComponent implements OnInit {
 @Input() tabSelected:string='Add';
  name = 'Add vehicle Pass Details';
  demoForm: FormGroup;
  unitValue = new FormControl("", [Validators.required]);
  transporterValue = new FormControl("", [Validators.required]);
  vehicleNumber = new FormControl("",[Validators.required]);
  dLNumber = new FormControl("",[Validators.required]);
  validFrom = new FormControl("",[Validators.required]);
  validTo = new FormControl("",[Validators.required]);
  inTime = new FormControl("",[Validators.required]);
  outTime = new FormControl("",[Validators.required]);
  constructor() {
    this.demoForm = new FormGroup({
      unitValue: this.unitValue,
      transporterValue: this.transporterValue,
      dLNumber:this.dLNumber,
      vehicleNumber:this.vehicleNumber,
      validFrom:this.validFrom,
      validTo:this.validTo,
      inTime:this.inTime,
      outTime:this.outTime
    });
  }
  ngOnInit(): void {
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.demoForm.controls[controlName].hasError(errorName);
  };
  save(){
    console.log('Save Action'+this.demoForm);
  }
}

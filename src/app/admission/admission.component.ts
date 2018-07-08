import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor() { }
submitflag = false;

  public saveData(name, address, sex, mobileno, collegename, emailid, batchname) {
    if (name.valid) {
console.log('Name : ' + name.value);
console.log('Adreess : ' + address.value);
console.log('Sex : ' + sex.value);
console.log('Mobile No  : ' + mobileno.value);
console.log('Email Id : ' + emailid.value);
console.log('College Name : ' + collegename.value);
console.log('Batch Name : ' + batchname.value);
    }
this.submitflag = true;
  }

  ngOnInit() {
  }

}

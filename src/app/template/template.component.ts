import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  // userId : number;
constructor(private router:Router, private route:ActivatedRoute){
  // this.userId = this.route.snapshot.queryParams['id'];
//  this.user = JSON.parse(localStorage.getItem('data')??"{}")


  
}


  defaultSelect='Tech Extensor';


  user = {
    fname:'',
    mname:'',
    lname: '',
   
  }
  hobby={
    bike:'',
    car:'',
    music:'',
    dance:'',
    travel :''
  }
  genders = ['male','female']
  getData(data:NgForm){
    localStorage.setItem('data',JSON.stringify(data));
    
  }


}
 
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @ViewChild('basicForm')
  newForm : NgForm | undefined;
  error:string|undefined;
  timer:number = 3;

  constructor(private router:Router,private userService:UserService) {

    this.timer =3;

  }
  
  
  
  onSubmit(){
 
    const id = this.newForm?.form.get('number')?.value;
    // if(this.userService.isUserExist(id)){
       this.router.navigate(['template'],{queryParams:{id:id}})
      //  return;
    // }
      // this.error =" user doesn't exist!"
  }
  ngOnInit(): void {

  }
}

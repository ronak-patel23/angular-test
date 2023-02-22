import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hobbies, UserModel } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({});
  hobbyArray = Hobbies;

  userId: string | undefined;
  user: UserModel = {
    id: '',
    firstname: '',
    middlename: '',
    lastname: '',
    age: 0,
    gender: '',
    hobbies: {},
    company: '',
  };

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams['id'];

    this.route.queryParams.subscribe((qp)=>{
        this.userId = qp['id'];
    });



  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.projectForm = new FormGroup({
      firstname: new FormControl('', { validators: [Validators.required] }),
      middlename: new FormControl('', { validators: [Validators.required] }),
      lastname: new FormControl('', { validators: [Validators.required] }),
      age: new FormControl('', { validators: [Validators.required] }),
      gender: new FormControl('', { validators: [Validators.required] }),
      hobbies: new FormGroup({
        music: new FormControl(false),
        dancing: new FormControl(false),
        movie: new FormControl(false),
        reading: new FormControl(false),
        travelling: new FormControl(false),
      }),
      'company': new FormControl('',{validators: [Validators.required,]})
    });
  }
  onSaveProject(){
    this.user.id = this.userId!;
    this.user = this.projectForm.value;
    this.userService.saveUser(this.user);
    this.router.navigate(['']);
  }

  getData(){
    if (this.userService.isUserExist(this.userId!)){
      this.user = this.userService.getUser(this.userId!)!;
      this.projectForm.setValue({
        firstname: this.user.firstname,
        middlename: this.user.middlename,
        lastname: this.user.lastname,
        age: this.user.age,
        gender: this.user.gender,
        hobbies: {
          'music': this.user.hobbies['music'],
          'dancing': this.user.hobbies['dancing'],
          'movie': this.user.hobbies['movie'],
          'reading': this.user.hobbies['reading'],
          'travelling': this.user.hobbies['travelling']
        },
    
        'company': this.user.company
      });
    }
  }

  clearForm(){
    this.projectForm.reset({});
  }

  back(){
    this.router.navigate(['/template'],{queryParamsHandling: 'preserve'});
  }
}

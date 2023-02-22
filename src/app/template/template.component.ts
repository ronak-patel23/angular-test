import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hobbies } from '../model/user.model';
import { UserService } from '../user.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  @ViewChild('basicForm')
  basicForm: NgForm | undefined;
  hobbieList = Hobbies;
  userId: string | undefined;

  user: UserModel = {
    id: '',
    firstname: '',
    lastname: '',
    middlename: '',
    age: 0,
    gender: '',
    hobbies: {},
    company: '',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams['id'];

    if (this.userService.isUserExist(this.userId!)) {
      this.user = this.userService.getUser(this.userId!)!;
    }
    this.route.queryParams.subscribe((qp) => {
      this.userId = qp['id'];
      console.log(this.userId);
      if (this.userService.isUserExist(qp['id'])) {
        this.user = this.userService.getUser(qp['id'])!;
      }
    });
  }

  saveData() {
    this.user.id = this.userId!;
    this.userService.saveUser(this.user);
    this.router.navigate(['/reactive'], { queryParamsHandling: 'preserve' });
  }

  clearForm() {
    this.user = {
      id: '',
      firstname: '',
      lastname: '',
      middlename: '',
      age: 0,
      gender: '',
      hobbies: {},
      company: '',
    };
  }

  back() {
    this.router.navigate(['../']);
  }
}

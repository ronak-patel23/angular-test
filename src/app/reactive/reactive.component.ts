import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  projectForm:FormGroup = new FormGroup({});
  onSaveProject(form:FormGroup){
    console.log(form);

  }
  hobbyArray:string []= ['I have a bike','I have a car','I like music','I like dancing','I like travelling']  
  ngOnInit(): void {
      this.projectForm = new FormGroup({


        'FirstName': new FormControl(null, Validators.required),
        'MiddleName':new FormControl(null, Validators.required),
        'LastName':new FormControl(null, Validators.required),
        'area':new FormControl(null),
        'age':new FormControl(),
        'genderControl' : new FormControl(),
        'hobby': new FormArray([],[Validators.required]),
        'company':new FormControl()



      })
  }

}

import { Component, Input } from 'angular2/core';
import { Student } from './Student';

@Component({
  selector: 'my-student-detail',
  template:`<div>
<div *ngIf="student">
      <h2>{{student.StudentFName}} details!</h2>
      <div><label>id: </label>{{student.StudentID}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="student.StudentFName" placeholder="name"/>
        <input [(ngModel)]="student.StudentLName" placeholder="name"/>
        <input [(ngModel)]="student.StudentFeesStatus" placeholder="name"/>
       </div>
    </div>
</div>`
})

export class StudentDetailComponent {

@Input() student: Student;

}
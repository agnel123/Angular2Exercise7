import {Component,Directive, OnInit} from 'angular2/core';
import { StudentDetailComponent } from './Student-Detail.component';
import { Student } from './Student';
import { StudentService } from './Student.service';



@Component
({
    selector: 'student-info',
    templateUrl:`app/Student.component.html`,
    styleUrls: ['app/Student.component.css'],
    directives: [StudentDetailComponent],
    providers:[StudentService]
})

export class StudentComponent implements OnInit{

constructor (private studentser:StudentService){
   
}

title = 'My First Application';
studentInfo: Student[];
selectedStudent : Student;


getStudentsLocal():void{

    this.studentser.getStudents().then(studentInfo => this.studentInfo = studentInfo)

}

ngOnInit():void{

    this.getStudentsLocal();
}

 onSelect(student:Student):void {
     this.selectedStudent = student;
 }
}


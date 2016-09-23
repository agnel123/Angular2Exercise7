System.register(['angular2/core', './Student'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Student_1;
    var StudentDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Student_1_1) {
                Student_1 = Student_1_1;
            }],
        execute: function() {
            StudentDetailComponent = (function () {
                function StudentDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Student_1.Student)
                ], StudentDetailComponent.prototype, "student", void 0);
                StudentDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-student-detail',
                        template: "<div>\n<div *ngIf=\"student\">\n      <h2>{{student.StudentFName}} details!</h2>\n      <div><label>id: </label>{{student.StudentID}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"student.StudentFName\" placeholder=\"name\"/>\n        <input [(ngModel)]=\"student.StudentLName\" placeholder=\"name\"/>\n        <input [(ngModel)]=\"student.StudentFeesStatus\" placeholder=\"name\"/>\n       </div>\n    </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentDetailComponent);
                return StudentDetailComponent;
            }());
            exports_1("StudentDetailComponent", StudentDetailComponent);
        }
    }
});
//# sourceMappingURL=Student-Detail.component.js.map
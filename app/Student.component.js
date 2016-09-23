System.register(['angular2/core', './Student-Detail.component', './Student.service'], function(exports_1, context_1) {
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
    var core_1, Student_Detail_component_1, Student_service_1;
    var StudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Student_Detail_component_1_1) {
                Student_Detail_component_1 = Student_Detail_component_1_1;
            },
            function (Student_service_1_1) {
                Student_service_1 = Student_service_1_1;
            }],
        execute: function() {
            StudentComponent = (function () {
                function StudentComponent(studentser) {
                    this.studentser = studentser;
                    this.title = 'My First Application';
                }
                StudentComponent.prototype.getStudentsLocal = function () {
                    var _this = this;
                    this.studentser.getStudents().then(function (studentInfo) { return _this.studentInfo = studentInfo; });
                };
                StudentComponent.prototype.ngOnInit = function () {
                    this.getStudentsLocal();
                };
                StudentComponent.prototype.onSelect = function (student) {
                    this.selectedStudent = student;
                };
                StudentComponent = __decorate([
                    core_1.Component({
                        selector: 'student-info',
                        templateUrl: "app/Student.component.html",
                        styleUrls: ['app/Student.component.css'],
                        directives: [Student_Detail_component_1.StudentDetailComponent],
                        providers: [Student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [Student_service_1.StudentService])
                ], StudentComponent);
                return StudentComponent;
            }());
            exports_1("StudentComponent", StudentComponent);
        }
    }
});
//# sourceMappingURL=Student.component.js.map
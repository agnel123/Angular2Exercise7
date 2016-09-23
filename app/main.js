System.register(['angular2/platform/browser', './Student.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, Student_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Student_component_1_1) {
                Student_component_1 = Student_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            browser_1.bootstrap(Student_component_1.StudentComponent);
        }
    }
});
//bootstrap(StudentDetailComponent);
//# sourceMappingURL=main.js.map
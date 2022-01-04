mainapp.controller("studentcontroller", function($scope){
    $scope.student={
        firstname: "Asif",
        lastname: "Khan",
        fees: 8000,
        subjects:[
                {name:'Physics',marks:78},
                {name:'Chemistry',marks:82},
                {name:'Math',marks:89}
            ],
            fullname: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstname + " " + studentObject.lastname;
            }
    };
})
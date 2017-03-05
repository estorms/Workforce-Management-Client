app.controller("EmployeeCtrl", function ($scope, $location, EmployeeFactory, $routeParams) {

    EmployeeFactory.getEmployees()
          .then((emps) => {
              console.log("emps", emps);
              $scope.employees = emps.data;
              console.log($scope.employees, "scopedemployees")
          });

    $scope.employeeDelete = (employeeId) => {
        EmployeeFactory.deleteEmployee(employeeId)
        .then((response) => {
            EmployeeFactory.getEmployees()
            .then((employees) => {
                $scope.employees = employees;
                window.location.reload();
            });
        });
    };



});


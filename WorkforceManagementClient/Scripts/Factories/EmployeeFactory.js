app.factory("EmployeeFactory", function ($q, $http, API_URL) {
    let getEmployees = () => {
        return $q((resolve, reject) => {
            $http.get(`${API_URL}/Employee`)
            .then((result) => {
                resolve(result);
            }),
            ((result) => {
                console.log("there was an error", result);
            });
        })
    }

    let deleteEmployee = (employeeId) => {
        return $q((resolve, reject) => {
            $http.delete(`${API_URL}/Employee/${employeeId}`)
            .then((result) => {
                resolve(result);
            }),
            ((result) => {
                console.log("there was an error", result);
            });
        });
    };

    let postEmployee = (newEmployee) => {
        return $q((resolve, reject) => {
            $http.post(`${API_URL}/Employee`, newEmployee)
                .success((result) => {
                    resolve(result); //
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let getSingleEmployee = (employeeId) => {
        return $q((resolve, reject) => {
            $http.get(`${API_URL}/Employee/${employeeId}`)
            .success((result) => {
                resolve(result);
            })
            .error((error) => {
                reject(error);
            });
        });
    };

    let editEmployee = (employeeId, employee) => {
        return $q((resolve, reject) => {
            $http.put(`${API_URL}/Employee/${employeeId}`, JSON.stringify(employee))
            .success((result) => {
                console.log(result)
                resolve(result);s
            })
            .error((error) => {
                reject(error);
            });
        });
    };
    return { deleteEmployee, editEmployee, getSingleEmployee, getEmployees }
});
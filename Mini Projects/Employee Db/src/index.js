(async function () {
    const data = await fetch("data.json")
    let response = await data.json()

    let employees = response;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    let employeeList = document.querySelector(".employee-list-names")
    let employeeInfo = document.querySelector(".employee-detail-info")

    //Add Employee Logic
    const createEmployeeBtn = document.querySelector(".createEmployee");
    const addEmployeeModal = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".addEmployee-create")

    createEmployeeBtn.addEventListener("click", () => {
        addEmployeeModal.style.display = "flex";
    })

    addEmployeeModal.addEventListener("click", (e) => {
        console.log(e.target.className)
        if (e.target.className === "addEmployee") {
            addEmployeeModal.style.display = "none";
        }
    })

    addEmployeeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(addEmployeeForm);
        const values = [...formData.entries()]
        console.log(values);

        let empData = {};
        values.forEach((val) => {
            empData[val[0]] = val[1];
        })
        empData.id = employees[employees.length - 1].id + 1;
        employees.push(empData);
        renderEmployees();
        addEmployeeForm.reset();
        addEmployeeModal.style.display = "none";
    })

    //Select Employee Logic
    employeeList.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
            selectedEmployeeId = e.target.id
        }
        renderEmployees();
        renderSingleEmployee();

        if (e.target.tagName === "I") {
            employees = employees.filter((emp) => String(emp.id) !== e.target.parentNode.id);
        }

        if (String(selectedEmployeeId) === e.target.parentNode.id) {
            selectedEmployeeId = employees[0]?.id || -1;
            selectedEmployee = employees[0] || {}

            renderSingleEmployee();
        }
        renderEmployees();
    })

    const renderEmployees = () => {
        employeeList.innerHTML = "";
        employees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add("employee-names-item")

            if (Number(selectedEmployeeId) === emp.id) {
                employee.classList.add("selected");
                selectedEmployee = emp;
            }
            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;
            employeeList.append(employee)
        })

    }

    const renderSingleEmployee = (e) => {
        if (selectedEmployeeId === -1) {
            employeeInfo.innerHTML = "";
            return;
        }
        employeeInfo.innerHTML = `
        <span class="employee-single-info">${selectedEmployee.firstName} ${selectedEmployee.lastName}</span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>Mobile: ${selectedEmployee.contactNumber}</span>
        <span>DOB: ${selectedEmployee.dob}</span>
        `
    }
    if (selectedEmployee) renderSingleEmployee();

    renderEmployees();
})();


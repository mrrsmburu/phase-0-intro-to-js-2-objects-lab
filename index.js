// Define the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update an employee object with a key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to destructively update an employee object with a key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from an employee object
  function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
  }
  
  // Function to destructively delete a key-value pair from an employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

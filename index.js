/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecords(arrOfArr) {
    return arrOfArr.map(arr => createEmployeeRecord(arr))
  }

  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    const timeInEvent = { type: "TimeIn", hour: parseInt(hour, 10), date };
    this.timeInEvents.push(timeInEvent);
    return this;
  }

  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
  
    this.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10)
    })
  
    return this
  }

  function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(function(e) {
      return e.date === date;
    });
  
    let timeOut = this.timeOutEvents.find(function(e) {
      return e.date === date;
    });
  
    return (timeOut.hour - timeIn.hour) / 100;
  }

  function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    let payRate = this.payPerHour;
    return hours * payRate;
  }

  function allWagesFor() {
    let datesWorked = this.timeInEvents.map((event) => event.date);
  
    let payable = datesWorked.reduce((memo, date) => {
      return memo + wagesEarnedOnDate.call(this, date);
    }, 0);
  
    return payable;
  }

  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(employee) {
      return employee.firstName === firstName
    });
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(totalPayroll, employee) {
      return totalPayroll + allWagesFor.call(employee)
    }, 0);
  }
  


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

//const allWagesFor = function () {
   // const eligibleDates = this.timeInEvents.map(function (e) {
        //return e.date
   // })

   // const payable = eligibleDates.reduce(function (memo, d) {
      //  return memo + wagesEarnedOnDate.call(this, d)
   // }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  //  return payable
//}


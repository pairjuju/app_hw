var person = {
  firstname: 'pair',
  lastname: 'juju',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function() {
  console.log('logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();

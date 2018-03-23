import $ from 'jquery';

export class DoctorSearch {
  constructor(parameters) {
    this.condition = parameters.condition;
    // this.name = parameters.name;
    // this.firstName = '';
    // this.lastName = '';
    // this.address = parameters.address;
    // this.phoneNumber = parameters.phoneNumber;
    // this.website = parameters.website;
    // this.acceptingNewPatients = parameters.acceptingNewPatients;
  }

  makeConditionRequest(doctorToConditionFunc){
    let nameArray = [];
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}&location=45.438%2C-122.512%2C100&user_location=45.438%2C-122.512&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    console.log({1:url})
    $.get(url).then(function(results){
      let doc_names = [];
      console.log(11,results);
      console.log(22,results.data);
      $.each( results.data, function(key, value) {
        console.log('heyo',key+ ": " + value.profile.first_name)
        doc_names.push(value.profile.first_name+" "+value.profile.last_name)
      });
      console.log(doc_names)
      doctorToConditionFunc(doc_names);
    }).fail(function(){
      console.log(33,'failure');
    })
  }


}

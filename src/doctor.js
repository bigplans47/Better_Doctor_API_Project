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

  makeConditionRequest(doctorToConditionFunc,failedSearch){
    let nameArray = [];
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}&location=45.438%2C-122.512%2C100&user_location=45.438%2C-122.512&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    console.log({1:url})
    $.get(url).then(function(results){
      let doc_names = [];
      console.log(11,results);
      console.log(22,results.data);
      $.each( results.data, function(key, value) {
        let website = 'No website provided, please call.';
        let newPatients = 'Accepting new patients'
        if(value.practices[0].website != undefined) {
          website = value.practices[0].website;
        }
        if(!value.practices[0].accepts_new_patients) {
          newPatients = 'Not accepting new patients'
        }
        let phoneNumber = value.practices[0].phones[0].number.slice(0,3)+"-"+value.practices[0].phones[0].number.slice(3,6)+"-"+value.practices[0].phones[0].number.slice(6,11)
        console.log(phoneNumber);
        // console.log('heyo',key+ ": " + value.profile.first_name)
        doc_names.push(value.profile.first_name+" "+value.profile.last_name+" at "+ value.practices[0].visit_address.street+" "+value.practices[0].visit_address.city+" "+value.practices[0].visit_address.state+" "+value.practices[0].visit_address.zip+" Phone Number: "+phoneNumber+" "+website+" "+newPatients);
        console.log('heyo2',key+ ": " + value.practices[0].accepts_new_patients)
      });
      doctorToConditionFunc(doc_names);
    }).fail(function( jqXHR, textStatus){
      console.log(33,'failure');
      console.log("44Request failed: " + jqXHR.responseText )
      failedSearch(jqXHR.responseText)
      // debugger;
    })
  }


}

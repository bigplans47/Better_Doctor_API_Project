import $ from 'jquery';

export class DoctorSearch {
  constructor() {
    this.condition = 'Toothache';
  }

  makeConditionRequest(doctorToConditionFunc){
    let nameArray = [];
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=Toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    $.get(url).then(function(results){
      let doc_names = [];
      console.log(11,results);
      console.log(22,results.data);
      $.each( results.data, function(key, value) {
        console.log('heyo',key+ ": " + value.profile.first_name)
        doc_names.push(value.profile.first_name)
      });

      // $(results.data).each( obj, function(key, value) {
        // console.log(element,'here')
        // nameArray.push(element.profile.first_name);
        // console.log(nameArray);
      // });
      console.log(doc_names)
      doctorToConditionFunc(doc_names);
    }).fail(function(){
      console.log(33,'failure');
    })
  }


}

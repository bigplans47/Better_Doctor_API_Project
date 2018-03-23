import $ from 'jquery';

export class DoctorSearch {
  constructor() {
    this.condition = 'Toothache';
  }

  makeConditionRequest(){
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}&location=37.773%2c-122.413%2C100&user_location=37.773%2c-122.413%2C100&skip=0%limit=10&user_key=${process.env.exports.apiKey}`;
    $.get(url).then(function(results){
      console.log(22,results);
    }).fail(function(){
      console.log(33,'failure');
    })
  }


}

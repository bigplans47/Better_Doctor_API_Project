import $ from 'jquery';
import {DoctorSearch} from './doctor.js';

var doctorToConditionFunc = function(results) {
  let names = null;
  $('.doctorToCondition').text(results.data[0].profile.first_name);
  // results.forEach(function(element) {
  //   names.push(element.data.profile.first_name);
  // });
  // $('.doctorToCondition').text(names);
}

var failedSearch = function() {

}

$(document).ready(function() {
  $('#formCondition').submit(function(event) {
    event.preventDefault();
    let doctorResult = new DoctorSearch();
    $('.userInfo').text('Searching, please wait');
    doctorResult.makeConditionRequest(doctorToConditionFunc);
  })
})

import $ from 'jquery';
import {DoctorSearch} from './doctor.js';

var doctorToConditionFunc = function(results) {
  $('.doctorToCondition').append('The following doctors can help you');
  $.each(results, function( index, value) {
    $('.doctorToCondition').append('<li>'+value+'</li>');
  })
  // $('.doctorToCondition').append('hi',results)
  // let names = null;
  // $('.doctorToCondition').text(results.data[0].profile.first_name);
  // results.forEach(function(element) {
  //   names.push(element.data.profile.first_name);
  // });
  // $('.doctorToCondition').text(names);
}

var failedSearch = function() {

}

$(document).ready(function() {
  $('#formCondition').submit(function(event) {
    let parameters = {condition : 'cancer', name : ''}
    event.preventDefault();
    let inputCondition = $('#inputCondition').val();
    let inputName = $('#inputName').val();
    // let inputLastName = $('#inputLastName').val();
    if(inputCondition.length > 0) {
      parameters.condition = inputCondition;
    }
    if(inputName.length > 0) {
      parameters.name = inputName;
    }
    // if(inputLastName.length > 0) {
    //   parameters.lastName = inputLastName;
    // }
    console.log(123,inputCondition,inputName,parameters)
    let doctorResult = new DoctorSearch(parameters);
    $('.userInfo').text('Searching, please wait');
    doctorResult.makeConditionRequest(doctorToConditionFunc);
  })
})

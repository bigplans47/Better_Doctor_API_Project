import $ from 'jquery';
import {DoctorSearch} from './doctor.js';
import './styles.css';

var doctorToConditionFunc = function(results) {
  $('.doctorToCondition').text('The following doctors can help you');
  $.each(results, function( index, value) {
    $('.doctorToCondition').append('<li>'+value+'</li>');
  })
}

var failedSearch = function(message) {
  $('.doctorToCondition').text('Error occured please see message: '+message);
}

var failedSearchName = function() {
  $('.doctorToCondition').text('No doctor name specified, please type a name');
}

var failedSearchNoDoc = function() {
  $('.doctorToCondition').text('Cannot find a doctor for the search made');
}

$(document).ready(function() {
  $('#formCondition').submit(function(event) {
    let parameters = {condition : '', name : ''}
    event.preventDefault();
    let inputCondition = $('#inputCondition').val();
    if(inputCondition.length > 0) {
      parameters.condition = inputCondition;
    }
    let doctorResult = new DoctorSearch(parameters);
    $('.userInfo').text('Searching, please wait');
    doctorResult.makeConditionRequest(doctorToConditionFunc,failedSearch,failedSearchNoDoc);
  });

  $('#formDocName').submit(function(event) {
    let parameters = {condition : '', name : ''}
    event.preventDefault();
    let inputName = $('#inputName').val();
    parameters.name = inputName;
    let doctorResult = new DoctorSearch(parameters);
    $('.userInfo').text('Searching, please wait');
    doctorResult.makeDoctorRequest(doctorToConditionFunc,failedSearch,failedSearchName,failedSearchNoDoc);
  });


})

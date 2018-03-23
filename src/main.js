import $ from 'jquery';
import {DoctorSearch} from './doctor.js';

$(document).ready(function() {
  $('#formCondition').submit(function(event) {
    event.preventDefault();
    let doctorResult = new DoctorSearch();
    doctorResult.makeConditionRequest();
  })
})

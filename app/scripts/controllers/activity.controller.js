angular.module('Netsafe').controller('activityController', function($scope) {
  console.log('you are in activityController');

  var dataSet;
  $scope.answered = false;
  $scope.custom = false;

  var symptom_counter = 0;

  var tf_blue_screen = false;
  var tf_computer_restart = false;
  var tf_slow_computer = false;
  var tf_locked_computer = false;
  var tf_reversed_text = false;
  var tf_not_responding = false;
  var tf_suspicious_email = false;
  var tf_browser_popup = false;
  var tf_win32 = false;
  var tf_desktop_popup = false;
  var tf_os_error = false;
  var tf_infected_disk = false;
  var tf_infected_file = false;
  var tf_malicious_programs = false;

  var tf_browser_toolbars = false;
  var tf_no_start_progams = false;
  var tf_unknown_exe = false;

  $("#blue-screen").hide();
  $("#computer-restart").hide();
  $("#slow-computer").hide();
  $("#locked-computer").hide();
  $("#reversed-text").hide();
  $("#not-responding").hide();
  $("#suspicious-email").hide();
  $("#browser-popup").hide();

  $("#win32-gif").hide();
  $("#win32-png").hide();

  $("#desktop-popup").hide();
  $("#os-error").hide();

  $("#infected-disk-gif").hide();
  $("#infected-disk-png").hide();

  $("#infected-file").hide();
  $("#malicious-programs").hide();

  $("#browser-toolbar").hide();
  $("#no-start-programs").hide();
  $("#unknown-exe").hide();

  $scope.showBlueScreen = function(){
    if(symptom_counter !== 5 && !tf_blue_screen){
      $("#blue-screen").show();
      tf_blue_screen = true;
      symptom_counter ++;
      $("#computer-crash-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_blue_screen){
      $("#blue-screen").hide();
      tf_blue_screen = false;
      symptom_counter --;
      $("#computer-crash-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showComputerRestart = function(){
    if(symptom_counter !== 5 && !tf_computer_restart) {
        $("#computer-restart").show();
        tf_computer_restart = true;
        symptom_counter ++;
        $("#computer-restart-btn").addClass("active");

        console.log(symptom_counter);
    } else if(tf_computer_restart){
        $("#computer-restart").hide();
        tf_computer_restart = false;
        symptom_counter --;
        $("#computer-restart-btn").removeClass("active");

        console.log(symptom_counter);
    }
  };

  $scope.showSlowComputer = function(){
    if(symptom_counter !== 5 && !tf_slow_computer){
      $("#slow-computer").show();
      tf_slow_computer = true;
      symptom_counter ++;
      $("#slow-computer-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_slow_computer){
      $("#slow-computer").hide();
      tf_slow_computer = false;
      symptom_counter --;
      $("#slow-computer-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showLockedComputer = function(){
    if(symptom_counter !== 5 && !tf_locked_computer){
      $("#locked-computer").show();
      tf_locked_computer = true;
      symptom_counter ++;
      $("#locked-computer-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_locked_computer){
      $("#locked-computer").hide();
      tf_locked_computer = false;
      symptom_counter --;
      $("#locked-computer-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showReversedText = function(){
    if(symptom_counter !== 5 && !tf_reversed_text){
      $("#reversed-text").show();
      tf_reversed_text = true;
      symptom_counter ++;
      $("#reversed-text-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_reversed_text){
      $("#reversed-text").hide();
      tf_reversed_text = false;
      symptom_counter --;
      $("#reversed-text-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showNotResponding = function(){
    if(symptom_counter !== 5 && !tf_not_responding){
      $("#not-responding").show();
      tf_not_responding = true;
      symptom_counter ++;
      $("#not-responding-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_not_responding){
      $("#not-responding").hide();
      tf_not_responding = false;
      symptom_counter --;
      $("#not-responding-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showSuspiciousEmail = function(){
    if(symptom_counter !== 5 && !tf_suspicious_email){
      $("#suspicious-email").show();
      tf_suspicious_email = true;
      symptom_counter ++;
      $("#suspicious-email-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_suspicious_email){
      $("#suspicious-email").hide();
      tf_suspicious_email = false;
      symptom_counter --;
      $("#suspicious-email-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showBrowserPopup = function(){
    if(symptom_counter !== 5 && !tf_browser_popup){
      $("#browser-popup").show();
      tf_browser_popup = true;
      symptom_counter ++;
      $("#browser-popup-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_browser_popup){
      $("#browser-popup").hide();
      tf_browser_popup = false;
      symptom_counter --;
      $("#browser-popup-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showWin32Error = function(){
    if(symptom_counter !== 5 && !tf_win32){
      $("#win32-gif").show();
      $("#win32-png").show();
      tf_win32 = true;
      symptom_counter ++;
      $("#win32-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_win32){
      $("#win32-gif").hide();
      $("#win32-png").hide();
      tf_win32 = false;
      symptom_counter --;
      $("#win32-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showDesktopPopup = function(){
    if(symptom_counter !== 5 && !tf_desktop_popup){
      $("#desktop-popup").show();
      tf_desktop_popup = true;
      symptom_counter ++;
      $("#desktop-popup-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_desktop_popup){
      $("#desktop-popup").hide();
      tf_desktop_popup = false;
      symptom_counter --;
      $("#desktop-popup-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showOSError = function(){
    if(symptom_counter !==5 && !tf_os_error){
      $("#os-error").show();
      tf_os_error = true;
      symptom_counter ++;
      $("#os-error-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_os_error){
      $("#os-error").hide();
      tf_os_error = false;
      symptom_counter --;
      $("#os-error-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showInfectedStorage = function(){
    if(symptom_counter !== 5 &&!tf_infected_disk){
      $("#infected-disk-gif").show();
      $("#infected-disk-png").show();
      tf_infected_disk = true;
      symptom_counter ++;
      $("#infected-storage-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_infected_disk){
      $("#infected-disk-gif").hide();
      $("#infected-disk-png").hide();
      tf_infected_disk = false;
      symptom_counter --;
      $("#infected-storage-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showInfectedFiles = function(){
    if(symptom_counter !== 5 && !tf_infected_file){
      $("#infected-file").show();
      tf_infected_file = true;
      symptom_counter ++;
      $("#infected-file-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_infected_file){
      $("#infected-file").hide();
      tf_infected_file = false;
      symptom_counter --;
      $("#infected-file-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showMaliciousPrograms = function(){
    if(symptom_counter !== 5 && !tf_malicious_programs){
      $("#malicious-programs").show();
      tf_malicious_programs = true;
      symptom_counter ++;
      $("#malicious-programs-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_malicious_programs){
      $("#malicious-programs").hide();
      tf_malicious_programs = false;
      symptom_counter --;
      $("#malicious-programs-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showBrowserToolbar = function(){
    if(symptom_counter !== 5 && !tf_browser_toolbars){
      $("#browser-toolbar").show();
      tf_browser_toolbars = true;
      symptom_counter ++;
      $("#browser-toolbar-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_browser_toolbars){
      $("#browser-toolbar").hide();
      tf_browser_toolbars = false;
      symptom_counter --;
      $("#browser-toolbar-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showNoStartProgram = function(){
    if(symptom_counter !== 5 && !tf_no_start_progams){
      $("#no-start-programs").show();
      tf_no_start_progams = true;
      symptom_counter ++;
      $("#no-start-programs-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_no_start_progams){
      $("#no-start-programs").hide();
      tf_no_start_progams = false;
      symptom_counter --;
      $("#no-start-programs-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.showUnknownExe = function(){
    if(symptom_counter !== 5 && !tf_unknown_exe){
      $("#unknown-exe").show();
      tf_unknown_exe = true;
      symptom_counter ++;
      $("#unknown-exe-btn").addClass("active");

      console.log(symptom_counter);
    } else if(tf_unknown_exe){
      $("#unknown-exe").hide();
      tf_unknown_exe = false;
      symptom_counter --;
      $("#unknown-exe-btn").removeClass("active");

      console.log(symptom_counter);
    }
  };

  $scope.clearSymptom = function(){
    symptom_counter = 0;

    tf_blue_screen = false;
    tf_computer_restart = false;
    tf_slow_computer = false;
    tf_locked_computer = false;
    tf_reversed_text = false;
    tf_not_responding = false;
    tf_suspicious_email = false;
    tf_browser_popup = false;
    tf_win32 = false;
    tf_desktop_popup = false;
    tf_os_error = false;
    tf_infected_disk = false;
    tf_infected_file = false;
    tf_malicious_programs = false;
    tf_browser_toolbars = false;
    tf_no_start_progams = false;
    tf_unknown_exe = false;

    $("#blue-screen").hide();
    $("#computer-restart").hide();
    $("#slow-computer").hide();
    $("#locked-computer").hide();
    $("#reversed-text").hide();
    $("#not-responding").hide();
    $("#suspicious-email").hide();
    $("#browser-popup").hide();

    $("#win32-gif").hide();
    $("#win32-png").hide();

    $("#desktop-popup").hide();
    $("#os-error").hide();

    $("#infected-disk-gif").hide();
    $("#infected-disk-png").hide();

    $("#infected-file").hide();
    $("#malicious-programs").hide();

    $("#browser-toolbar").hide();
    $("#no-start-programs").hide();
    $("#unknown-exe").hide();

    $("#computer-crash-btn").removeClass("active");
    $("#computer-restart-btn").removeClass("active");
    $("#slow-computer-btn").removeClass("active");
    $("#locked-computer-btn").removeClass("active");
    $("#reversed-text-btn").removeClass("active");
    $("#not-responding-btn").removeClass("active");
    $("#suspicious-email-btn").removeClass("active");
    $("#browser-popup-btn").removeClass("active");
    $("#win32-btn").removeClass("active");
    $("#desktop-popup-btn").removeClass("active");
    $("#os-error-btn").removeClass("active");
    $("#infected-storage-btn").removeClass("active");
    $("#infected-file-btn").removeClass("active");
    $("#malicious-programs-btn").removeClass("active");

    $("#browser-toolbar-btn").removeClass("active");
    $("#no-start-programs-btn").removeClass("active");
    $("#unknown-exe-btn").removeClass("active");
  };

  $scope.showAnswers = function(){
    $scope.answered = !$scope.answered;

    if(tf_desktop_popup && tf_infected_file && tf_infected_disk && tf_suspicious_email && tf_blue_screen){
      $scope.answer = "Virus and Trojan Horse";
    } else if (tf_browser_popup && tf_slow_computer && tf_malicious_programs){
      $scope.answer = "Spyware and Adware";
    } else if (tf_slow_computer && tf_infected_file && tf_win32 && tf_malicious_programs && tf_computer_restart && tf_browser_toolbars){
      $scope.answer = "Worms and Virus";
    } else if (tf_slow_computer && tf_browser_popup && tf_infected_file && tf_blue_screen){
      $scope.answer = "Virus and Adware";
    } else if (tf_slow_computer && tf_malicious_programs && tf_reversed_text){
      $scope.answer = "Keylogger and Spyware";
    } else if (tf_malicious_programs && tf_suspicious_email && tf_infected_disk && tf_locked_computer) {
      $scope.answer = "Trojan Horse and Ransomware";
    } else if (tf_browser_popup && tf_malicious_programs && tf_computer_restart) {
      $scope.answer = "Trojan Horse and Adware";
    } else if (tf_infected_disk && tf_infected_file && tf_os_error && tf_blue_screen && tf_no_start_progams) {
      $scope.answer = "Trojan Horse, Virus and Worm";
    } else if (tf_suspicious_email && tf_malicious_programs && tf_locked_computer && tf_browser_toolbars) {
      $scope.answer = "Spyware, Trojan Horse, and Randsomware";
    } else if (tf_slow_computer && tf_reversed_text && tf_win32 && tf_desktop_popup && tf_blue_screen) {
      $scope.answer = "Keylogger, Worms and Virus";
    } else {
      if(symptom_counter === 1){
        if (tf_slow_computer || tf_computer_restart){
          $scope.answer = "Possible malware may be Virus, Trojan Horse, Worms, Adware or Spyware";
        } else if (tf_suspicious_email) {
          $scope.answer = "Possible malware may be Trojan Horse or Ransomware";
        } else {
          $scope.answer = "Please choose more symptoms";
        }
      } else {
        if (tf_slow_computer && tf_desktop_popup) {
          if (tf_infected_file) {
            if(tf_blue_screen){
              $scope.answer = "Possible malware may be Virus";
            } else {
              $scope.answer = "Possible malware may be Virus, Trojan Horse or Worms";
            }
          } else {
            $scope.answer = "Possible malware may be Virus, Trojan Horse, Spyware or Worms";
          }

        } else if (tf_computer_restart && tf_malicious_programs) {
          if(tf_infected_disk){
            if(tf_suspicious_email){
              $scope.answer = "Possible malware may be Trojan Horse";
            } else {
              $scope.answer = "Possible malware may be Trojan Horse or Virus";
            }
          } else {
            $scope.answer = "Possible malware may be Trojan Horse, Virus or Spyware";
          }

        } else if (tf_computer_restart && tf_os_error) {
          if(tf_infected_file){
            if(tf_win32){
              $scope.answer = "Possible malware may be Worms";
            } else {
              $scope.answer = "Possible malware may be Worms, Virus or Trojan Horse";
            }
          } else {
            $scope.answer = "Possible malware may be Worm or Virus";
          }

        } else if (tf_slow_computer && tf_browser_popup) {
          $scope.answer = "Possible malware may be Adware";
        } else if (tf_slow_computer && tf_malicious_programs) {
          if(tf_browser_toolbars){
            $scope.answer = "Possible malware may be Spyware";
          } else {
            $scope.answer = "Possible malware may be Spyware or Trojan Horse";
          }

        } else if (tf_slow_computer && (tf_reversed_text || tf_unknown_exe)) {
          $scope.answer = "Possible malware may be Keylogger";
        } else if (tf_suspicious_email && tf_locked_computer) {
          $scope.answer = "Possible malware may be Ransomware";
        } else {
          $scope.answer = "Please choose more symptoms or Combination not found";
        }
      }
      //$scope.answer = "combination not found";
    }
  };

  // limit checkbox selection to maximum of 5
  $('.checkboxes').on('change', function(){
    if($('.checkboxes:checked').length > 5){
      this.checked = false;
    }
  });

  // open / close the modal
  $scope.openCustom = function(){
    $scope.custom = !$scope.custom;
  };

  $scope.data = JSON.parse(localStorage.getItem('data')) || [];

  //if scope data has contents, put contents in until where there is data
  if($scope.data){
    for(var i = 0; i < $scope.data.length; i ++ ){
      if($scope.data[i]){
        var locstore = "#localStorageData";
        var specificlocstore = locstore + "" + i;
        $(specificlocstore).text($scope.data[i].name);
      }
    }
  };

  //if scope data has more than 5 contents, disable customize content button
  if($scope.data && ($scope.data.length > 5)){
    // disable button here
  };

  $scope.addCustom = function(){
    // close modal
    $scope.custom = !$scope.custom;

    // get checkbox id
    $scope.checkboxArray = [];

    $('.checkboxes:checked').each(function() {
      console.log($(this).val());
      $scope.checkboxArray.push($(this).val());
    });

    if($scope.data.length < 5){ // if localstorage is less than 5, you can just add into the array
      // put name, symptom, answer in data array
      $scope.data.push({
        name: $scope.name,
        symptom: $scope.checkboxArray,
        answer: $scope.answer
      });
      localStorage.setItem('data', JSON.stringify($scope.data));

      // clear form content when opening again
      $('#activity-form')[0].reset();
    } else { // if localstorage is already more than 5, look for "empty" data, where name is "-"
      var data = JSON.parse(localStorage.getItem('data'));
      for (var i = 0; i < $scope.data.length; i++){
        if(data[i].name === "-"){
          data[i].name = $scope.name;
          data[i].symptom = $scope.checkboxArray;
          data[i].answer = $scope.answer;
          break; // to go out of loop
        }
      }
      localStorage.setItem('data', JSON.stringify(data));
    }

    //put data into button
    if($scope.data){
      var data = JSON.parse(localStorage.getItem('data'));
      for(var i = 0; i < $scope.data.length; i ++ ){
        if(data[i]){
          var locstore = "#localStorageData";
          var specificlocstore = locstore + "" + i;
          $(specificlocstore).text(data[i].name);
        }
      }
    }; //if ends here
  };

  $scope.playCustom = function(num){
    $scope.clearSymptom

    var data = JSON.parse(localStorage.getItem('data'));

    for(var i = 0; i < data[num].symptom.length; i++){
      if(data[num].symptom[i] === "1"){
        $("#blue-screen").show();
      } else if (data[num].symptom[i] === "2"){
        $("#computer-restart"). show();
      } else if (data[num].symptom[i] === "3"){
        $("#slow-computer").show();
      } else if (data[num].symptom[i] === "4"){
        $("#locked-computer").show();
      } else if (data[num].symptom[i] === "5"){
        $("#reversed-text").show();
      } else if (data[num].symptom[i] === "6"){
        $("#not-responding").show();
      } else if (data[num].symptom[i] === "7"){
        $("#suspicious-email").show();
      } else if (data[num].symptom[i] === "8"){
        $("#browser-popup").show();
      } else if (data[num].symptom[i] === "9"){
        $("#win32-gif").show();
        $("#win32-png").show();
      } else if (data[num].symptom[i] === "10"){
        $("#desktop-popup").show();
      } else if (data[num].symptom[i] === "11"){
        $("#os-error").show();
      } else if (data[num].symptom[i] === "12"){
        $("#infected-disk-gif").show();
        $("#infected-disk-png").show();
      } else if (data[num].symptom[i] === "13"){
        $("#infected-file").show();
      } else if (data[num].symptom[i] === "14"){
        $("#malicious-programs").show();
      } else if (data[num].symptom[i] === "15"){
        $("#browser-toolbar").show();
      } else if (data[num].symptom[i] === "16"){
        $("#no-start-programs").show();
      } else { // 17
        $("#unknown-exe").show();
      };
    };
  };

  $scope.clearCustom = function(num){
    $scope.clearSymptom();

    //localStorage.removeItem($scope.data[num]);
    var data = JSON.parse(localStorage.getItem('data'));

    data[num].name = "-";
    data[num].symptom = [];
    data[num].answer = "-";

    localStorage.setItem('data', JSON.stringify(data));

    var locstore = "#localStorageData";
    var specificlocstore = locstore + "" + num;
    $(specificlocstore).text(data[num].name);
  };

  // show answer function for custom combinations
  $scope.showAnswer = function(num){
    $scope.answered = !$scope.answered;

    var data = JSON.parse(localStorage.getItem('data'));
    $scope.answer = data[num].answer;
  };

});

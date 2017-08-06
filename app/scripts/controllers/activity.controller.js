angular.module('Netsafe').controller('activityController', function($scope) {
  console.log('you are in activityController');

  $scope.answered = false;
  $scope.custom = false;

  var symptom_filter = [ 0, 0, 0, 0, 0, 0, 0];
                        // virus, trojan, worms, adware, spyware, keylogger, ransomware
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
    symptom_filter = [ 0, 0, 0, 0, 0, 0, 0 ];
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

    var possible = "Possible malware/s may be: ";
    var builder = "";
    var all_match_builder = "";

    if(tf_slow_computer){
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[2]++;
      symptom_filter[3]++;
      symptom_filter[4]++;
      symptom_filter[5]++;
    }

    if(tf_blue_screen){
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[2]++;
      symptom_filter[3]++;
    }

    if (tf_malicious_programs){
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[4]++;
      symptom_filter[5]++;
    }

    if(tf_infected_file){
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[2]++;
      symptom_filter[4]++;
    }

    if(tf_infected_disk){
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[2]++;
    }

    if (tf_os_error) {
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[2]++;
    }

    if(tf_computer_restart){
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[2]++;
    }

    if (tf_desktop_popup) {
      symptom_filter[0]++;
      symptom_filter[1]++;
      symptom_filter[4]++;
    }

    if(tf_reversed_text){
      symptom_filter[0]++;
      symptom_filter[5]++;
    }

    if(tf_locked_computer){
      symptom_filter[0]++;
      symptom_filter[6]++;
    }

    if(tf_suspicious_email){
      symptom_filter[1]++;
      symptom_filter[6]++;
    }

    if(tf_browser_popup){
      symptom_filter[3]++;
    }

    if(tf_win32){
      symptom_filter[2]++;
    }

    if(tf_browser_toolbars){
      symptom_filter[4]++;
    }

    if(tf_unknown_exe){
      symptom_filter[5]++;
    }

    if(tf_no_start_progams){
      symptom_filter[0]++;
    }

    var check_for_match = [];
    console.log(check_for_match);

    for (var i = 0; i < symptom_filter.length; i++){
      check_for_match[i] = false;
      console.log(check_for_match);
      if(symptom_filter[i] != 0){
        if(i === 0){
          all_match_builder = all_match_builder + "Virus ";
        } else if (i === 1){
          all_match_builder = all_match_builder + "Trojan Horse ";
        } else if (i === 2){
          all_match_builder = all_match_builder + "Worms ";
        } else if (i === 3){
          all_match_builder = all_match_builder + "Adware ";
        } else if (i === 4){
          all_match_builder = all_match_builder + "Spyware ";
        } else if (i === 5){
          all_match_builder = all_match_builder + "Keylogger ";
        } else {
          all_match_builder = all_match_builder + "Ransomware ";
        }
      }

      if(symptom_filter[i] === symptom_counter){
        check_for_match[i] = true;    // says if there's a complete match, if there is a single true, then print builder
        if(i === 0){
          builder = builder + "Virus ";
        } else if (i === 1){
          builder = builder + "Trojan Horse ";
        } else if (i === 2){
          builder = builder + "Worms ";
        } else if (i === 3){
          builder = builder + "Adware ";
        } else if (i === 4){
          builder = builder + "Spyware ";
        } else if (i === 5){
          builder = builder + "Keylogger ";
        } else {
          builder = builder + "Ransomware ";
        }
      }
    }
    console.log("builder", builder);
    console.log("all_match", all_match_builder);
    console.log(check_for_match);

    if(symptom_counter === 0){ // no symptoms have been selected
      possible = "No symptoms selected!";
      $scope.answer = possible;
    } else {
      possible = "No specific malware can be found given symptom combination. However, the selected symptoms show the following malwares: ";
      $scope.answer = possible + all_match_builder;

      for(var n = 0; n < check_for_match.length; n++){
        if(check_for_match[n] === true){
          console.log(possible);
          possible = "Possible malware/s may be: ";
          $scope.answer = possible + builder;
          n = check_for_match.length;
        }
      }
    }

    symptom_filter = [ 0, 0, 0, 0, 0, 0, 0];
  };

  // limit checkbox selection to maximum of 5
  $('.checkboxes').on('change', function(){
    if($('.checkboxes:checked').length > 5){
      this.checked = false;
    }
  });

  // open / close the modal
  $scope.openCustom = function(){
    $scope.answer = "";
    $scope.custom = !$scope.custom;
  };

  $scope.data = JSON.parse(localStorage.getItem('data')) || [];

  //during init
  //if scope data has contents, put contents in until where there is data
  if($scope.data){
    for(var i = 0; i < $scope.data.length; i ++ ){
      if($scope.data[i]){
        var locstore = "#localStorageData";
        var specificlocstore = locstore + "" + i;
        $(specificlocstore).text($scope.data[i].name);
      }
    }
  }

  $scope.addCustom = function(){
    // close modal
    $scope.custom = !$scope.custom;

    // get checkbox id
    $scope.checkboxArray = [];

    $('.checkboxes:checked').each(function() {
      $scope.checkboxArray.push($(this).val());
    });

    if($scope.data.length < 5){

      if($scope.data.length === 0){
        $scope.data.push({
              name: $scope.name,
              symptom: $scope.checkboxArray,
              answer: $scope.answer
        });

        localStorage.setItem('data', JSON.stringify($scope.data));
      } else {
        var data = JSON.parse(localStorage.getItem('data'));
        if(data.length < 5){
          var newItem = {
            name: $scope.name,
            symptom: $scope.checkboxArray,
            answer: $scope.answer
          };
          data.push(newItem);
        } else {
          for (var i = 0; i < data.length; i++){
            if(data[i].name === "-"){
              data[i].name = $scope.name;
              data[i].symptom = $scope.checkboxArray;
              data[i].answer = $scope.answer;
              break; // to go out of loop
            }
          }
        }
        localStorage.setItem('data', JSON.stringify(data));
      }
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
      $('#activity-form')[0].reset();
    }

    //put data into button
    var data = JSON.parse(localStorage.getItem('data'));
    for(var i = 0; i < data.length; i ++ ){
      if(data[i]){
        var locstore = "#localStorageData";
        var specificlocstore = locstore + "" + i;
        $(specificlocstore).text(data[i].name);
      }
    }
  };

  $scope.playCustom = function(num){
    $scope.clearSymptom();

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
      }
    }
  };

  $scope.clearCustom = function(num){
    //$scope.clearSymptom();
    symptom_filter = [ 0, 0, 0, 0, 0, 0, 0 ];
    symptom_counter = 0;

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

  var prevID = 0;

  $scope.showHelpTab = function(id){
    if(prevID === id){
      $(".malwr-help-btn").removeClass("active");
      $scope.showHelpTab(1);

      prevID = 0;
    } else {
      $(".malwr-help-btn").removeClass("active");
      $(".tab-help-content").hide();

      $("#malwr-help-btn-"+ id).addClass("active");
      $("#tab-help-content-" + id).show();

      prevID = id;
    }
  };

  $scope.showHelpTab(1);

});

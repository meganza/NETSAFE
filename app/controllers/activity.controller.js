angular.module('Netsafe').controller('activityController', function($scope) {
  console.log('you are in activityController');

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }

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
  }



});

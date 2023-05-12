const header = document.querySelector('header');
header.style.backgroundColor = '#00B069';

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#FF9F84';

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeader.length; index += 1){
  emergencyTasksHeader[index].style.backgroundColor = '#A531F3';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const noEmergencyTasksHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeader.length; index += 1){
  noEmergencyTasksHeader[index].style.backgroundColor = '#232525';
}

const footer = document.querySelector('footer');
footer.style.backgroundColor = '#003533';
const sidebar = document.querySelector("aside");
function toggleSidebar(){
    sidebar.classList.toggle("open");
}

// Function to toggle the visibility of the settings content
function toggleSettingsContent() {
    var settingsContent = document.querySelector('.setting-content');
    settingsContent.classList.toggle('show');
  }
  
  // Event listener to trigger toggleSettingsContent function on click of settings button
  document.getElementById('settings-button').addEventListener('click', toggleSettingsContent);
  
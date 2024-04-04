// Function to open the notification panel
function openNotificationPanel() {
    var notificationPanel = document.getElementById('notificationPanel');
    notificationPanel.style.display = 'block';
  }
  
  // Function to close the notification panel
  function closeNotificationPanel() {
    var notificationPanel = document.getElementById('notificationPanel');
    notificationPanel.style.display = 'none';
  }
  
  // Example function to add a notification
  function addNotification(message) {
    var notificationContent = document.querySelector('.notification-content');
    var notificationItem = document.createElement('div');
    notificationItem.classList.add('notification-item');
    notificationItem.textContent = message;
    notificationContent.appendChild(notificationItem);
  }
  
  // Example usage:
  // Call addNotification function with a message to add a notification
  // Example: addNotification("New notification message");
  
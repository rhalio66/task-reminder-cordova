document.addEventListener('deviceready', () => {
  // Initialize the plugin
  const push = PushNotification.init({
    android: { senderID: "318380074379" },
    ios:    { alert: true, badge: true, sound: true }
  });

  // device registered: you could send this ID to your server if needed
  push.on('registration', data => {
    console.log("Registered for pushes, ID =", data.registrationId);
  });

  // on receiving a push: show a local notification
  push.on('notification', data => {
    PushNotification.localNotification({
      title:   data.title   || "Task Reminder",
      message: data.message || "You have a reminder!"
    });
  });

  // any errors
  push.on('error', err => console.error("Push error:", err.message));
}, false);

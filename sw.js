// [CODE START] sw.js - Firebase Messaging Service Worker

// Listen for push events
self.addEventListener("push", (event) => {
    const notif = event.data.json().notification;

    // Show notification
    event.waitUntil(self.registration.showNotification(notif.title, {
        body: notif.body,
        icon: notif.image,
        data: { url: notif.click_action }
    }));
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
    // Open the notification's URL
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
// [CODE END] sw.js

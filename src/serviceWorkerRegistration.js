// src/serviceWorkerRegistration.js
export async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('/service-worker.js');
    }
  }
  
  export async function subscribeUserToPush(isPushEnabled) {
    const registration = await navigator.serviceWorker.ready;
  
    if (isPushEnabled) {
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: '<Your Public VAPID Key>',
      });
  
      await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        await fetch('http://localhost:5000/unsubscribe', {
          method: 'POST',
          body: JSON.stringify(subscription),
          headers: { 'Content-Type': 'application/json' },
        });
        await subscription.unsubscribe();
      }
    }
  }
  
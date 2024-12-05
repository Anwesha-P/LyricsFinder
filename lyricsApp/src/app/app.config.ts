import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    // Directly providing the Firebase config (this is for Firebase Authentication)
    {
      provide: FIREBASE_OPTIONS,
      useValue: {
        projectId: "lyricsfinder-7446e",
        appId: "1:530212744250:web:a9e63abfa851f179ec9903",
        storageBucket: "lyricsfinder-7446e.firebasestorage.app",
        apiKey: "AIzaSyAaYW3_Qs4EXwithLOznkLyu8Fn_TY0P1I",
        authDomain: "lyricsfinder-7446e.firebaseapp.com",
        messagingSenderId: "530212744250",
        measurementId: "G-7X9QGM8D6Y"
      }
    },
    // Other providers
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Your router configuration
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      projectId: "lyricsfinder-7446e",
      appId: "1:530212744250:web:a9e63abfa851f179ec9903",
      storageBucket: "lyricsfinder-7446e.firebasestorage.app",
      apiKey: "AIzaSyAaYW3_Qs4EXwithLOznkLyu8Fn_TY0P1I",
      authDomain: "lyricsfinder-7446e.firebaseapp.com",
      messagingSenderId: "530212744250",
      measurementId: "G-7X9QGM8D6Y"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};

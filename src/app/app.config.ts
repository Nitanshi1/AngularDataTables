import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-data-tables-79809","appId":"1:469878386054:web:f0899c66f373d73f379007","storageBucket":"angular-data-tables-79809.appspot.com","apiKey":"AIzaSyB_D9PjZe6P6xqoRp0zJnV4hBeDSjzmZZ0","authDomain":"angular-data-tables-79809.firebaseapp.com","messagingSenderId":"469878386054","measurementId":"G-918PYL1BX1"})), provideFirestore(() => getFirestore())]
};

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppService } from '../../app.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { 
        provide: HTTP_INTERCEPTORS, 
        useClass: AppService, 
        multi: true 
    }
];
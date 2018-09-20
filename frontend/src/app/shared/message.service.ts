import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    current_location = new Subject<any>();

    sendMessage(obj: any) {
        this.subject.next(obj);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    set_current_location(obj: any) {
        this.current_location.next(obj);
    }
    get_current_location(): Observable<any> {
        return this.current_location.asObservable();
    }
}
import { Observable } from 'rxjs/Observable';
import { Sinks, SourceDefinition, Drivers, Driver, DisposeFn } from '../core';
import { EventDefinition } from '../react';
export interface EventSink extends Sinks {
    events: Observable<EventDefinition>;
}
export interface EventSourceDefinition extends SourceDefinition {
    source: Observable<EventDefinition>;
    dispose: DisposeFn;
}
export interface EventSource {
    events: Observable<EventDefinition>;
}
export interface EventDriver extends Driver {
    (sinks: EventSink, key: string): EventSourceDefinition;
}
export interface EventDriverDefinition extends Drivers {
    events: EventDriver;
}
export declare function makeEventDriver(persist?: boolean): EventDriver;

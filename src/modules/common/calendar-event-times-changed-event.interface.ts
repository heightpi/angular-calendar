import { CalendarEvent } from '../../../src/modules/common/calendar-utils';

/**
 * The output `$event` type when an event is resized or dragged and dropped.
 */
export interface CalendarEventTimesChangedEvent {
  event: CalendarEvent;
  newStart: Date;
  newEnd?: Date;
}

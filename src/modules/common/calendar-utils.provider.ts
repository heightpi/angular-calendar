import { Injectable } from '@angular/core';
import {
  getMonthView,
  GetMonthViewArgs,
  MonthView,
  getWeekViewHeader,
  GetWeekViewHeaderArgs,
  WeekDay,
  getWeekView,
  GetWeekViewArgs,
  getDayView,
  getGroupDayView,
  GetDayViewArgs,
  GetGroupDayViewArgs,
  DayView,
  getDayViewHourGrid,
  GetDayViewHourGridArgs,
  DayViewHour,
  WeekView
} from './calendar-utils';

@Injectable()
export class CalendarUtils {
  getMonthView(args: GetMonthViewArgs): MonthView {
    return getMonthView(args);
  }

  getWeekViewHeader(args: GetWeekViewHeaderArgs): WeekDay[] {
    return getWeekViewHeader(args);
  }

  getWeekView(args: GetWeekViewArgs): WeekView {
    return getWeekView(args);
  }

  getDayView(args: GetDayViewArgs): DayView {
    return getDayView(args);
  }

  getGroupDayView(args: GetGroupDayViewArgs): DayView {
    return getGroupDayView(args);
  }

  getDayViewHourGrid(args: GetDayViewHourGridArgs): DayViewHour[] {
    return getDayViewHourGrid(args);
  }
}

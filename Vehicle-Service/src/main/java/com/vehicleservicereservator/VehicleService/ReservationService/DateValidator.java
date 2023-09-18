package com.vehicleservicereservator.VehicleService.ReservationService;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateValidator {
    public boolean isDateTodayOrFuture(Date date, Time time)  {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date()); // Current date

        Calendar targetCalendar = Calendar.getInstance();
        targetCalendar.setTime(date);

        // Compare year, month, and day
        if (calendar.get(Calendar.YEAR) < targetCalendar.get(Calendar.YEAR) &&
                calendar.get(Calendar.MONTH) < targetCalendar.get(Calendar.MONTH) &&
                calendar.get(Calendar.DAY_OF_MONTH) < targetCalendar.get(Calendar.DAY_OF_MONTH)) {
            return true; // Date is today or in the future


        }else if (calendar.get(Calendar.YEAR) == targetCalendar.get(Calendar.YEAR) &&
                calendar.get(Calendar.MONTH) == targetCalendar.get(Calendar.MONTH) &&
                calendar.get(Calendar.DAY_OF_MONTH) == targetCalendar.get(Calendar.DAY_OF_MONTH)){
            SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");

            // Format the current time to match the "HH:mm:ss" format
            String currentTimeString = timeFormat.format(new Date());

            // Parse the current time string to create a Date object
            try {
                Date currentTime = timeFormat.parse(currentTimeString);

                Date targetTime = timeFormat.parse(time.toString());

                Calendar targetCalendarr = Calendar.getInstance();
                targetCalendarr.setTime(targetTime);

                Calendar currentCalendar = Calendar.getInstance();
                currentCalendar.setTime(currentTime);

                // Parse the target time (from the Time object) to create a Date object

                // Compare hour, minute, and second
                if (currentCalendar.compareTo(targetCalendarr) <= 0) {
                    return true; // Time is in the future or equal to current time
                }

            }catch (ParseException e) {
                throw new RuntimeException(e);
            }



            return false; // Time is in the past

        }

        return false; // Date is in the past
    }


        }

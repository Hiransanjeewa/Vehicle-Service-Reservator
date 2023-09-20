package com.vehicleservicereservator.VehicleService.ReservationService;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;

public class DateValidator {
    public boolean isDateTodayOrFuture(Date date, Time time)  {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date()); // Current date

        Calendar targetCalendar = Calendar.getInstance();
        targetCalendar.setTime(date);

        // Compare year, month, and day
//        System.out.println(calendar.get(Calendar.YEAR));
//        System.out.println(calendar.get(Calendar.MONTH));
//        System.out.println(calendar.get(Calendar.DAY_OF_MONTH));
//
//
//        System.out.println(targetCalendar.get(Calendar.YEAR));
//        System.out.println(targetCalendar.get(Calendar.MONTH));
//        System.out.println(targetCalendar.get(Calendar.DAY_OF_MONTH));

        if (calendar.get(Calendar.YEAR) < targetCalendar.get(Calendar.YEAR) ||
                calendar.get(Calendar.MONTH) < targetCalendar.get(Calendar.MONTH) ||
                calendar.get(Calendar.DAY_OF_MONTH) < targetCalendar.get(Calendar.DAY_OF_MONTH)) {
            System.out.println("date is future");
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
                if (currentCalendar.compareTo(targetCalendarr) < 0) {
                    System.out.println("time is in future");
                    return true; // Time is in the future or equal to current time
                }else {
                    System.out.println("time is in Past");
                    return false;
                }

            }catch (ParseException e) {
                throw new RuntimeException(e);
            }

           // return false; // Time is in the past

        }
        else {
            System.out.println("Date is in Past");
            return false; // Date is in the past
        }

    }

    public boolean isFuture(Date date, Time time) {
        String dateStr = date.toString();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSSSSS");

        try {
            // Parse the input date string into a Date object
            Date inputDate = dateFormat.parse(dateStr);

            // Get the current date and time
            Date currentDate = new Date();

            // Compare the parsed date with the current date
            if (inputDate.after(currentDate)) {
                System.out.println("The provided date is in the future.");
            } else {
//                System.out.println(inputDate);
//                System.out.println(currentDate);
                System.out.println("The provided date is in the past.");
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return false;
    }

        }

package com.vehicleservicereservator.VehicleService.Dtos;

public class DeleteReservationDto {
    int book_id ;

    public DeleteReservationDto(int book_id) {
        this.book_id = book_id;
    }

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public DeleteReservationDto() {
    }
}

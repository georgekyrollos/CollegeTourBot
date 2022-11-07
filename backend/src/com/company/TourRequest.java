package com.company;

import java.sql.Timestamp;

public class TourRequest {
    public int tour_request_id;
    public String date;
    public String email;
    public String phone;
    public String phoneCarrier;
    public String notificationChoice;
    public String tourTime;
    public String collegeName;
    public String firstName;
    public String lastName;
    public String website;
    public Timestamp last_changed;

    public TourRequest(int tour_request_id, String date, String email, String phone, String phoneCarrier, String notificationChoice, String tourTime,  String collegeName, String firstName, String lastName,String website) {
        this.tour_request_id = tour_request_id;
        this.date = date;
        this.email = email;
        this.phone = phone;
        this.phoneCarrier = phoneCarrier;
        this.notificationChoice = notificationChoice;
        this.tourTime = tourTime;
        this.collegeName = collegeName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.website = website;
    }

    public int getTour_request_id() {
        return tour_request_id;
    }

    public void setTour_request_id(int tour_request_id) {
        this.tour_request_id = tour_request_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhoneCarrier() {
        return phoneCarrier;
    }

    public void setPhoneCarrier(String phoneCarrier) {
        this.phoneCarrier = phoneCarrier;
    }

    public String getNotificationChoice() {
        return notificationChoice;
    }

    public void setNotificationChoice(String notificationChoice) {
        this.notificationChoice = notificationChoice;
    }

    public String getTourTime() {
        return tourTime;
    }

    public void setTourTime(String tourTime) {
        this.tourTime = tourTime;
    }

    public Timestamp getLast_changed() {
        return last_changed;
    }

    public void setLast_changed(Timestamp last_changed) {
        this.last_changed = last_changed;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}


package com.company;

import java.sql.Date;

public class Tours
{
    public static int uniqueid = 0;
    public int tour_id;
    public int college_id;
    public String tour_time;
    public String tour_date;
    public boolean available;

    public Tours(int college_id, String tour_time, String tour_date,boolean available) {
        this.tour_id = tour_id;
        this.college_id = college_id;
        this.tour_time = tour_time;
        this.tour_date = tour_date;
        this.available = available;
    }

    public int getTour_id() {
        return tour_id;
    }

    public void setTour_id(int tour_id) {
        this.tour_id = tour_id;
    }
    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
    public int getCollege_id() {
        return college_id;
    }

    public void setCollege_id(int college_id) {
        this.college_id = college_id;
    }

    public String getTour_time() {
        return tour_time;
    }

    public void setTour_time(String tour_time) {
        this.tour_time = tour_time;
    }

    public String getTour_date() {
        return tour_date;
    }

    public void setTour_date(String tour_date) {
        this.tour_date = tour_date;
    }

    public String toString()
    {
        String ret = "";
        String tourtype = "";
        uniqueid++;
        String name = "";
        if(isAvailable())
        {
           tourtype = "touropen";
           name = "Avail (Click to book)";
        }
        else
        {
            tourtype = "tourclosed";
            name = "Unavail Click for bot";
        }
        ret = " { id:'"+uniqueid+"' ,name: \""+name+"\", date: \""+hyphenToSlash(getTour_date())+"\", description:\""+getTour_time()+"\", type: \""+tourtype+"\" },";
        return ret;
    }
public String hyphenToSlash(String x)
{
    return x.replace("-","/");
}
}

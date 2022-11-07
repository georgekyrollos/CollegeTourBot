package com.company;

public class College {
    public int college_id;
    public String college_name;
    public String city;
    public String state;
    public String website;
    public String parser_type;
    public String websiteCal;


    public College(int college_id, String college_name, String city, String state, String website, String parser_type, String websiteCal) {
        this.college_id = college_id;
        this.college_name = college_name;
        this.city = city;
        this.state = state;
        this.website = website;
        this.parser_type = parser_type;
        this.websiteCal = websiteCal;
    }

    public int getCollege_id() {
        return college_id;
    }

    public void setCollege_id(int college_id) {
        this.college_id = college_id;
    }

    public String getCollege_name() {
        return college_name;
    }

    public void setCollege_name(String college_name) {
        this.college_name = college_name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getParser_type() {
        return parser_type;
    }

    public String getWebsiteCal() {
        return websiteCal;
    }

    public void setWebsiteCal(String websiteCal) {
        this.websiteCal = websiteCal;
    }

    public void setParser_type(String parser_type) {
        this.parser_type = parser_type;
    }
    public String toString()
    {
        return getCollege_name();
    }

    }


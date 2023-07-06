package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBLTOWER")
public class Tower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String sapid;

    @Column(name = "STATE")
    private String state;

    @Column(name = "DISTRICT")
    private String district;

    @Column(name = "BLOCK")
    private String block;

    @Column(name = "VILLAGE")
    private String village;

    @Column(name = "COMMISIION_DATE")
    private String comm_date;

    @Column(name = "CENSUS_CODE")
    private String census_code;

    @Column(name = "PROJECT_ID")
    private String project_id;

    @Column(name = "APPENDIX_NO")
    private String app_no;

    public Tower() {
    }

    public Tower(String sapid, String state, String district, String block, String village, String comm_date,
                 String census_code, String project_id, String app_no) {
        this.sapid = sapid;
        this.state = state;
        this.district = district;
        this.block = block;
        this.village = village;
        this.comm_date = comm_date;
        this.census_code = census_code;
        this.project_id = project_id;
        this.app_no = app_no;
    }

    public String getSapid() {
        return sapid;
    }

    public void setSapid(String sapid) {
        this.sapid = sapid;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getBlock() {
        return block;
    }

    public void setBlock(String block) {
        this.block = block;
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    public String getComm_date() {
        return comm_date;
    }

    public void setComm_date(String comm_date) {
        this.comm_date = comm_date;
    }

    public String getCensus_code() {
        return census_code;
    }

    public void setCensus_code(String census_code) {
        this.census_code = census_code;
    }

    public String getProject_id() {
        return project_id;
    }

    public void setProject_id(String project_id) {
        this.project_id = project_id;
    }

    public String getApp_no() {
        return app_no;
    }

    public void setApp_no(String app_no) {
        this.app_no = app_no;
    }
}

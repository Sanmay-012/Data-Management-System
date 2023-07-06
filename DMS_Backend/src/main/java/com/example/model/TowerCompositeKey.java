package com.example.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class TowerCompositeKey implements Serializable{
	@Column(name = "DATADATE")
    private String dDate;
    
    @Column(name = "SAPID")
    private String sapid;

    public TowerCompositeKey() {
    	
    }
	public TowerCompositeKey(String dDate, String sapid) {
		super();
		this.dDate = dDate;
		this.sapid = sapid;
	}
	public String getdDate() {
		return dDate;
	}
	public void setdDate(String dDate) {
		this.dDate = dDate;
	}
	public String getSapid() {
		return sapid;
	}
	public void setSapid(String sapid) {
		this.sapid = sapid;
	}        
}

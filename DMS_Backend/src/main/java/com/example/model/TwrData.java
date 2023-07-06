package com.example.model;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBLTWRDATA")
public class TwrData {
     @EmbeddedId
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private TowerCompositeKey id;

	 @Column(name = "PCU")
	 private int pcu;

	 @Column(name = "IT")
	 private int it;
	 
	 @Column(name = "VT")
	 private int vt;

	 @Column(name = "TT")
	 private int tt;

	 public TwrData() {
		 
	 }

	public TwrData(TowerCompositeKey id, int pcu, int it, int vt, int tt) {
		super();
		this.id = id;
		this.pcu = pcu;
		this.it = it;
		this.vt = vt;
		this.tt = tt;
	}

	public TowerCompositeKey getId() {
		return id;
	}

	public void setId(TowerCompositeKey id) {
		this.id = id;
	}

	public int getPcu() {
		return pcu;
	}

	public void setPcu(int pcu) {
		this.pcu = pcu;
	}

	public int getIt() {
		return it;
	}

	public void setIt(int it) {
		this.it = it;
	}

	public int getVt() {
		return vt;
	}

	public void setVt(int vt) {
		this.vt = vt;
	}

	public int getTt() {
		return tt;
	}

	public void setTt(int tt) {
		this.tt = tt;
	}
	 
	 
	 
}

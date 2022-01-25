package hu.BezemConversieTool.Domain;

import java.io.Serializable;

public class Toets implements Serializable {

    String naam;
    Double weging;
    Double aantalEc;

    public Toets(String naam, Double weging, Double aantalEc) {
        this.naam = naam;
        this.weging = weging;
        this.aantalEc = aantalEc;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public Double getWeging() {
        return weging;
    }

    public void setWeging(Double weging) {
        this.weging = weging;
    }

    public Double getAantalEc() {
        return aantalEc;
    }

    public void setAantalEc(Double aantalEc) {
        this.aantalEc = aantalEc;
    }
}

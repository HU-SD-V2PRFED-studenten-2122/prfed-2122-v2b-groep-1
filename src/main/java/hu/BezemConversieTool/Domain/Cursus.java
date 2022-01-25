package hu.BezemConversieTool.Domain;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Cursus implements Serializable {

    String code;
    String naam;
    Double aantalEc;
    String bezemOfConversie;
    ArrayList<String> periode;
    String coordinator;
    ArrayList<Cursus> NieuweCursus = new ArrayList<>();
    int leerjaar;
    ArrayList<Toets> toetsen = new ArrayList<>();

    public Cursus(String code, String naam, Double aantalEc, String bezemOfConversie, ArrayList<String> periode, String coordinator, ArrayList<Cursus> NieuweCursus, int leerjaar, ArrayList<Toets> toetsen) {
        this.code = code;
        this.naam = naam;
        this.aantalEc = aantalEc;
        this.bezemOfConversie = bezemOfConversie;
        this.periode = periode;
        this.coordinator = coordinator;
        this.leerjaar = leerjaar;
        this.toetsen = toetsen;
    }

    public static ArrayList<Cursus> dummyData () {

        ArrayList<Toets> toetsen = new ArrayList<>();
        toetsen.add(new Toets( "toets", 10.0, 1.0));

        ArrayList<String> periodes = new ArrayList<>();
        periodes.add("periode1");

        Cursus occ = new Cursus("0", "oudeCursus", 0.0, "bezem", periodes, "coordinator", null, 0, toetsen);
        ArrayList<Cursus> oc = new ArrayList<>();
        oc.add(occ);

        ArrayList<Cursus> cursussen = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            cursussen.add(new Cursus(String.valueOf(i), "naam" + i, 10.0,  "bezemOfConversie" + i, periodes,  "coordinator" + i, oc, 1, toetsen ));
        }

        return cursussen;
    }

    public ArrayList<Cursus> getNieuweCursus() {
        return NieuweCursus;
    }

    public void setNieuweCursus(ArrayList<Cursus> nieuweCursus) {
        NieuweCursus = nieuweCursus;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public Double getAantalEc() {
        return aantalEc;
    }

    public void setAantalEc(Double aantalEc) {
        this.aantalEc = aantalEc;
    }

    public String getBezemOfConversie() {
        return bezemOfConversie;
    }

    public void setBezemOfConversie(String bezemOfConversie) {
        this.bezemOfConversie = bezemOfConversie;
    }

    public ArrayList<String> getPeriode() {
        return periode;
    }

    public void setPeriode(ArrayList<String> periode) {
        this.periode = periode;
    }

    public String getCoordinator() {
        return coordinator;
    }

    public void setCoordinator(String coordinator) {
        this.coordinator = coordinator;
    }

    public int getLeerjaar() {
        return leerjaar;
    }

    public void setLeerjaar(int leerjaar) {
        this.leerjaar = leerjaar;
    }

    public ArrayList<Toets> getToetsen() {
        return toetsen;
    }

    public void setToetsen(ArrayList<Toets> toetsen) {
        this.toetsen = toetsen;
    }
}

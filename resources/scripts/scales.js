
//Class for each note
class key {
    constructor(I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII) {
        this.I = I;
        this.ii = ii;
        this.II = II;
        this.iii = iii;
        this.III = III;
        this.PIV = PIV;
        this.tritone = tritone;
        this.PV = PV;
        this.vi = vi;
        this.VI = VI;
        this.vii = vii;
        this.VII = VII;
    } 
    get I() {
        return this.I;
    }
    get ii() {
        return this.ii;
    }
    get II() {
        return this.II;
    }
    get iii() {
        return this.iii;
    }
    get III() {
        return this.III;
    }
    get PIV() {
        return this.PIV;
    }
    get tritone() {
        return this.tritone;
    }
    get PV() {
        return this.PV;
    }
    get vi() {
        return this.vi;
    }
    get VI() {
        return this.VI;
    }
    get vii() {
        return this.vii;
    }
    get VII() {
        return this.VII;
    }
    majorScale() {
        const major = [this.I, this.ii, this.iii, this.PIV, this.PV, this.vi, this.vii];
    }
}


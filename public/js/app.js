const url = "https://api.covid19india.org/data.json";

console.log("Testing");

const Tcases = document.querySelector("#Tcases");
const Acases = document.querySelector("#Acases");
const Rcases = document.querySelector("#Rcases");
const Tdeaths = document.querySelector("#Tdeaths");

const state1 = document.querySelector("#state-1");
const MTcases = document.querySelector("#MTcases");
const MAcases = document.querySelector("#MAcases");
const MRcases = document.querySelector("#MRcases");
const MTdeaths = document.querySelector("#MTdeaths");

const state2 = document.querySelector("#state-2");
const TTcases = document.querySelector("#TTcases");
const TAcases = document.querySelector("#TAcases");
const TRcases = document.querySelector("#TRcases");
const TTdeaths = document.querySelector("#TTdeaths");

const state3 = document.querySelector("#state-3");
const GTcases = document.querySelector("#GTcases");
const GAcases = document.querySelector("#GAcases");
const GRcases = document.querySelector("#GRcases");
const GTdeaths = document.querySelector("#GTdeaths");

const state4 = document.querySelector("#state-4");
const DTcases = document.querySelector("#DTcases");
const DAcases = document.querySelector("#DAcases");
const DRcases = document.querySelector("#DRcases");
const DTdeaths = document.querySelector("#DTdeaths");

const state5 = document.querySelector("#state-5");
const RTcases = document.querySelector("#RTcases");
const RAcases = document.querySelector("#RAcases");
const RRcases = document.querySelector("#RRcases");
const RTdeaths = document.querySelector("#RTdeaths");

const state6 = document.querySelector("#state-6");
const MPTcases = document.querySelector("#MPTcases");
const MPAcases = document.querySelector("#MPAcases");
const MPRcases = document.querySelector("#MPRcases");
const MPTdeaths = document.querySelector("#MPTdeaths");

const state7 = document.querySelector("#state-7");
const UPTcases = document.querySelector("#UPTcases");
const UPAcases = document.querySelector("#UPAcases");
const UPRcases = document.querySelector("#UPRcases");
const UPTdeaths = document.querySelector("#UPTdeaths");

const state8 = document.querySelector("#state-8");
const WBTcases = document.querySelector("#WBTcases");
const WBAcases = document.querySelector("#WBAcases");
const WBRcases = document.querySelector("#WBRcases");
const WBTdeaths = document.querySelector("#WBTdeaths");

const state9 = document.querySelector("#state-9");
const APTcases = document.querySelector("#APTcases");
const APAcases = document.querySelector("#APAcases");
const APRcases = document.querySelector("#APRcases");
const APTdeaths = document.querySelector("#APTdeaths");

const state10 = document.querySelector("#state-10");
const BTcases = document.querySelector("#BTcases");
const BAcases = document.querySelector("#BAcases");
const BRcases = document.querySelector("#BRcases");
const BTdeaths = document.querySelector("#BTdeaths");

const state11 = document.querySelector("#state-11");
const PTcases = document.querySelector("#PTcases");
const PAcases = document.querySelector("#PAcases");
const PRcases = document.querySelector("#PRcases");
const PTdeaths = document.querySelector("#PTdeaths");

const state12 = document.querySelector("#state-12");
const TETcases = document.querySelector("#TETcases");
const TEAcases = document.querySelector("#TEAcases");
const TERcases = document.querySelector("#TERcases");
const TETdeaths = document.querySelector("#TETdeaths");

const state13 = document.querySelector("#state-13");
const KTcases = document.querySelector("#KTcases");
const KAcases = document.querySelector("#KAcases");
const KRcases = document.querySelector("#KRcases");
const KTdeaths = document.querySelector("#KTdeaths");

const state14 = document.querySelector("#state-14");
const UATcases = document.querySelector("#UATcases");
const UAAcases = document.querySelector("#UAAcases");
const UARcases = document.querySelector("#UARcases");
const UATdeaths = document.querySelector("#UATdeaths");

const state15 = document.querySelector("#state-15");
const JKTcases = document.querySelector("#JKTcases");
const JKAcases = document.querySelector("#JKAcases");
const JKRcases = document.querySelector("#JKRcases");
const JKTdeaths = document.querySelector("#JKTdeaths");

const state16 = document.querySelector("#state-16");
const ODTcases = document.querySelector("#ODTcases");
const ODAcases = document.querySelector("#ODAcases");
const ODRcases = document.querySelector("#ODRcases");
const ODTdeaths = document.querySelector("#ODTdeaths");

const state17 = document.querySelector("#state-17");
const HRTcases = document.querySelector("#HRTcases");
const HRAcases = document.querySelector("#HRAcases");
const HRRcases = document.querySelector("#HRRcases");
const HRTdeaths = document.querySelector("#HRTdeaths");

const state18 = document.querySelector("#state-18");
const KLTcases = document.querySelector("#KLTcases");
const KLAcases = document.querySelector("#KLAcases");
const KLRcases = document.querySelector("#KLRcases");
const KLTdeaths = document.querySelector("#KLTdeaths");

const state19 = document.querySelector("#state-19");
const JHTcases = document.querySelector("#JHTcases");
const JHAcases = document.querySelector("#JHAcases");
const JHRcases = document.querySelector("#JHRcases");
const JHTdeaths = document.querySelector("#JHTdeaths");

const state20 = document.querySelector("#state-20");
const ASTcases = document.querySelector("#ASTcases");
const ASAcases = document.querySelector("#ASAcases");
const ASRcases = document.querySelector("#ASRcases");
const ASTdeaths = document.querySelector("#ASTdeaths");

const state21 = document.querySelector("#state-21");
const CHTcases = document.querySelector("#CHTcases");
const CHAcases = document.querySelector("#CHAcases");
const CHRcases = document.querySelector("#CHRcases");
const CHTdeaths = document.querySelector("#CHTdeaths");

const state22 = document.querySelector("#state-22");
const TRTcases = document.querySelector("#TRTcases");
const TRAcases = document.querySelector("#TRAcases");
const TRRcases = document.querySelector("#TRRcases");
const TRTdeaths = document.querySelector("#TRTdeaths");

const state23 = document.querySelector("#state-23");
const CTTcases = document.querySelector("#CTTcases");
const CTAcases = document.querySelector("#CTAcases");
const CTRcases = document.querySelector("#CTRcases");
const CTTdeaths = document.querySelector("#CTTdeaths");

const state24 = document.querySelector("#state-24");
const HPTcases = document.querySelector("#HPTcases");
const HPAcases = document.querySelector("#HPAcases");
const HPRcases = document.querySelector("#HPRcases");
const HPTdeaths = document.querySelector("#HPTdeaths");

const state25 = document.querySelector("#state-25");
const UTTcases = document.querySelector("#UTTcases");
const UTAcases = document.querySelector("#UTAcases");
const UTRcases = document.querySelector("#UTRcases");
const UTTdeaths = document.querySelector("#UTTdeaths");

const state26 = document.querySelector("#state-26");
const GOTcases = document.querySelector("#GOTcases");
const GOAcases = document.querySelector("#GOAcases");
const GORcases = document.querySelector("#GORcases");
const GOTdeaths = document.querySelector("#GOTdeaths");

const state27 = document.querySelector("#state-27");
const LDTcases = document.querySelector("#LDTcases");
const LDAcases = document.querySelector("#LDAcases");
const LDRcases = document.querySelector("#LDRcases");
const LDTdeaths = document.querySelector("#LDTdeaths");

const state28 = document.querySelector("#state-28");
const ANTcases = document.querySelector("#ANTcases");
const ANAcases = document.querySelector("#ANAcases");
const ANRcases = document.querySelector("#ANRcases");
const ANTdeaths = document.querySelector("#ANTdeaths");

const state29 = document.querySelector("#state-29");
const MNTcases = document.querySelector("#MNTcases");
const MNAcases = document.querySelector("#MNAcases");
const MNRcases = document.querySelector("#MNRcases");
const MNTdeaths = document.querySelector("#MNTdeaths");

const state30 = document.querySelector("#state-30");
const PYTcases = document.querySelector("#PYTcases");
const PYAcases = document.querySelector("#PYAcases");
const PYRcases = document.querySelector("#PYRcases");
const PYTdeaths = document.querySelector("#PYTdeaths");

const state31 = document.querySelector("#state-31");
const MGTcases = document.querySelector("#MGTcases");
const MGAcases = document.querySelector("#MGAcases");
const MGRcases = document.querySelector("#MGRcases");
const MGTdeaths = document.querySelector("#MGTdeaths");

const state32 = document.querySelector("#state-32");
const MZTcases = document.querySelector("#MZTcases");
const MZAcases = document.querySelector("#MZAcases");
const MZRcases = document.querySelector("#MZRcases");
const MZTdeaths = document.querySelector("#MZTdeaths");

const state33 = document.querySelector("#state-33");
const ARTcases = document.querySelector("#ARTcases");
const ARAcases = document.querySelector("#ARAcases");
const ARRcases = document.querySelector("#ARRcases");
const ARTdeaths = document.querySelector("#ARTdeaths");

const state34 = document.querySelector("#state-34");
const DNTcases = document.querySelector("#DNTcases");
const DNAcases = document.querySelector("#DNAcases");
const DNRcases = document.querySelector("#DNRcases");
const DNTdeaths = document.querySelector("#DNTdeaths");

const state35 = document.querySelector("#state-35");
const NLTcases = document.querySelector("#NLTcases");
const NLAcases = document.querySelector("#NLAcases");
const NLRcases = document.querySelector("#NLRcases");
const NLTdeaths = document.querySelector("#NLTdeaths");

const state36 = document.querySelector("#state-36");
const LKTcases = document.querySelector("#LKTcases");
const LKAcases = document.querySelector("#LKAcases");
const LKRcases = document.querySelector("#LKRcases");
const LKTdeaths = document.querySelector("#LKTdeaths");

const state37 = document.querySelector("#state-37");
const SKTcases = document.querySelector("#SKTcases");
const SKAcases = document.querySelector("#SKAcases");
const SKRcases = document.querySelector("#SKRcases");
const SKTdeaths = document.querySelector("#SKTdeaths");

fetch(url).then((response) => {
  response.json().then((body) => {
    if (body.error) {
      console.log(body.error);
    } else {
      Tcases.textContent = body.statewise[0].confirmed;
      Acases.textContent = body.statewise[0].active;
      Rcases.textContent = body.statewise[0].recovered;
      Tdeaths.textContent = body.statewise[0].deaths;

      state1.textContent = body.statewise[1].state;
      MTcases.textContent = body.statewise[1].confirmed;
      MAcases.textContent = body.statewise[1].active;
      MRcases.textContent = body.statewise[1].recovered;
      MTdeaths.textContent = body.statewise[1].deaths;

      state2.textContent = body.statewise[2].state;
      TTcases.textContent = body.statewise[2].confirmed;
      TAcases.textContent = body.statewise[2].active;
      TRcases.textContent = body.statewise[2].recovered;
      TTdeaths.textContent = body.statewise[2].deaths;

      state3.textContent = body.statewise[3].state;
      GTcases.textContent = body.statewise[3].confirmed;
      GAcases.textContent = body.statewise[3].active;
      GRcases.textContent = body.statewise[3].recovered;
      GTdeaths.textContent = body.statewise[3].deaths;

      state4.textContent = body.statewise[4].state;
      DTcases.textContent = body.statewise[4].confirmed;
      DAcases.textContent = body.statewise[4].active;
      DRcases.textContent = body.statewise[4].recovered;
      DTdeaths.textContent = body.statewise[4].deaths;

      state5.textContent = body.statewise[5].state;
      RTcases.textContent = body.statewise[5].confirmed;
      RAcases.textContent = body.statewise[5].active;
      RRcases.textContent = body.statewise[5].recovered;
      RTdeaths.textContent = body.statewise[5].deaths;

      state6.textContent = body.statewise[6].state;
      MPTcases.textContent = body.statewise[6].confirmed;
      MPAcases.textContent = body.statewise[6].active;
      MPRcases.textContent = body.statewise[6].recovered;
      MPTdeaths.textContent = body.statewise[6].deaths;

      state7.textContent = body.statewise[7].state;
      UPTcases.textContent = body.statewise[7].confirmed;
      UPAcases.textContent = body.statewise[7].active;
      UPRcases.textContent = body.statewise[7].recovered;
      UPTdeaths.textContent = body.statewise[7].deaths;

      state8.textContent = body.statewise[8].state;
      WBTcases.textContent = body.statewise[8].confirmed;
      WBAcases.textContent = body.statewise[8].active;
      WBRcases.textContent = body.statewise[8].recovered;
      WBTdeaths.textContent = body.statewise[8].deaths;

      state9.textContent = body.statewise[9].state;
      APTcases.textContent = body.statewise[9].confirmed;
      APAcases.textContent = body.statewise[9].active;
      APRcases.textContent = body.statewise[9].recovered;
      APTdeaths.textContent = body.statewise[9].deaths;

      state10.textContent = body.statewise[10].state;
      BTcases.textContent = body.statewise[10].confirmed;
      BAcases.textContent = body.statewise[10].active;
      BRcases.textContent = body.statewise[10].recovered;
      BTdeaths.textContent = body.statewise[10].deaths;

      state11.textContent = body.statewise[11].state;
      PTcases.textContent = body.statewise[11].confirmed;
      PAcases.textContent = body.statewise[11].active;
      PRcases.textContent = body.statewise[11].recovered;
      PTdeaths.textContent = body.statewise[11].deaths;

      state12.textContent = body.statewise[12].state;
      TETcases.textContent = body.statewise[12].confirmed;
      TEAcases.textContent = body.statewise[12].active;
      TERcases.textContent = body.statewise[12].recovered;
      TETdeaths.textContent = body.statewise[12].deaths;

      state13.textContent = body.statewise[13].state;
      KTcases.textContent = body.statewise[13].confirmed;
      KAcases.textContent = body.statewise[13].active;
      KRcases.textContent = body.statewise[13].recovered;
      KTdeaths.textContent = body.statewise[13].deaths;

      state14.textContent = body.statewise[14].state;
      UATcases.textContent = body.statewise[14].confirmed;
      UAAcases.textContent = body.statewise[14].active;
      UARcases.textContent = body.statewise[14].recovered;
      UATdeaths.textContent = body.statewise[14].deaths;

      state15.textContent = body.statewise[15].state;
      JKTcases.textContent = body.statewise[15].confirmed;
      JKAcases.textContent = body.statewise[15].active;
      JKRcases.textContent = body.statewise[15].recovered;
      JKTdeaths.textContent = body.statewise[15].deaths;

      state16.textContent = body.statewise[16].state;
      ODTcases.textContent = body.statewise[16].confirmed;
      ODAcases.textContent = body.statewise[16].active;
      ODRcases.textContent = body.statewise[16].recovered;
      ODTdeaths.textContent = body.statewise[16].deaths;

      state17.textContent = body.statewise[17].state;
      HRTcases.textContent = body.statewise[17].confirmed;
      HRAcases.textContent = body.statewise[17].active;
      HRRcases.textContent = body.statewise[17].recovered;
      HRTdeaths.textContent = body.statewise[17].deaths;

      state18.textContent = body.statewise[18].state;
      KLTcases.textContent = body.statewise[18].confirmed;
      KLAcases.textContent = body.statewise[18].active;
      KLRcases.textContent = body.statewise[18].recovered;
      KLTdeaths.textContent = body.statewise[18].deaths;

      state19.textContent = body.statewise[19].state;
      JHTcases.textContent = body.statewise[19].confirmed;
      JHAcases.textContent = body.statewise[19].active;
      JHRcases.textContent = body.statewise[19].recovered;
      JHTdeaths.textContent = body.statewise[19].deaths;

      state20.textContent = body.statewise[20].state;
      ASTcases.textContent = body.statewise[20].confirmed;
      ASAcases.textContent = body.statewise[20].active;
      ASRcases.textContent = body.statewise[20].recovered;
      ASTdeaths.textContent = body.statewise[20].deaths;

      state21.textContent = body.statewise[21].state;
      CHTcases.textContent = body.statewise[21].confirmed;
      CHAcases.textContent = body.statewise[21].active;
      CHRcases.textContent = body.statewise[21].recovered;
      CHTdeaths.textContent = body.statewise[21].deaths;

      state22.textContent = body.statewise[22].state;
      TRTcases.textContent = body.statewise[22].confirmed;
      TRAcases.textContent = body.statewise[22].active;
      TRRcases.textContent = body.statewise[22].recovered;
      TRTdeaths.textContent = body.statewise[22].deaths;

      state23.textContent = body.statewise[23].state;
      CTTcases.textContent = body.statewise[23].confirmed;
      CTAcases.textContent = body.statewise[23].active;
      CTRcases.textContent = body.statewise[23].recovered;
      CTTdeaths.textContent = body.statewise[23].deaths;

      state24.textContent = body.statewise[24].state;
      HPTcases.textContent = body.statewise[24].confirmed;
      HPAcases.textContent = body.statewise[24].active;
      HPRcases.textContent = body.statewise[24].recovered;
      HPTdeaths.textContent = body.statewise[24].deaths;

      state25.textContent = body.statewise[25].state;
      UTTcases.textContent = body.statewise[25].confirmed;
      UTAcases.textContent = body.statewise[25].active;
      UTRcases.textContent = body.statewise[25].recovered;
      UTTdeaths.textContent = body.statewise[25].deaths;

      state26.textContent = body.statewise[26].state;
      GOTcases.textContent = body.statewise[26].confirmed;
      GOAcases.textContent = body.statewise[26].active;
      GORcases.textContent = body.statewise[26].recovered;
      GOTdeaths.textContent = body.statewise[26].deaths;

      state27.textContent = body.statewise[27].state;
      LDTcases.textContent = body.statewise[27].confirmed;
      LDAcases.textContent = body.statewise[27].active;
      LDRcases.textContent = body.statewise[27].recovered;
      LDTdeaths.textContent = body.statewise[27].deaths;

      state28.textContent = body.statewise[28].state;
      ANTcases.textContent = body.statewise[28].confirmed;
      ANAcases.textContent = body.statewise[28].active;
      ANRcases.textContent = body.statewise[28].recovered;
      ANTdeaths.textContent = body.statewise[28].deaths;

      state29.textContent = body.statewise[29].state;
      MNTcases.textContent = body.statewise[29].confirmed;
      MNAcases.textContent = body.statewise[29].active;
      MNRcases.textContent = body.statewise[29].recovered;
      MNTdeaths.textContent = body.statewise[29].deaths;

      state30.textContent = body.statewise[30].state;
      PYTcases.textContent = body.statewise[30].confirmed;
      PYAcases.textContent = body.statewise[30].active;
      PYRcases.textContent = body.statewise[30].recovered;
      PYTdeaths.textContent = body.statewise[30].deaths;

      state31.textContent = body.statewise[31].state;
      MGTcases.textContent = body.statewise[31].confirmed;
      MGAcases.textContent = body.statewise[31].active;
      MGRcases.textContent = body.statewise[31].recovered;
      MGTdeaths.textContent = body.statewise[31].deaths;

      state32.textContent = body.statewise[32].state;
      MZTcases.textContent = body.statewise[32].confirmed;
      MZAcases.textContent = body.statewise[32].active;
      MZRcases.textContent = body.statewise[32].recovered;
      MZTdeaths.textContent = body.statewise[32].deaths;

      state33.textContent = body.statewise[33].state;
      ARTcases.textContent = body.statewise[33].confirmed;
      ARAcases.textContent = body.statewise[33].active;
      ARRcases.textContent = body.statewise[33].recovered;
      ARTdeaths.textContent = body.statewise[33].deaths;

      state34.textContent = body.statewise[34].state;
      DNTcases.textContent = body.statewise[34].confirmed;
      DNAcases.textContent = body.statewise[34].active;
      DNRcases.textContent = body.statewise[34].recovered;
      DNTdeaths.textContent = body.statewise[34].deaths;

      state35.textContent = body.statewise[35].state;
      NLTcases.textContent = body.statewise[35].confirmed;
      NLAcases.textContent = body.statewise[35].active;
      NLRcases.textContent = body.statewise[35].recovered;
      NLTdeaths.textContent = body.statewise[35].deaths;

      state36.textContent = body.statewise[36].state;
      LKTcases.textContent = body.statewise[36].confirmed;
      LKAcases.textContent = body.statewise[36].active;
      LKRcases.textContent = body.statewise[36].recovered;
      LKTdeaths.textContent = body.statewise[36].deaths;

      state37.textContent = body.statewise[37].state;
      SKTcases.textContent = body.statewise[37].confirmed;
      SKAcases.textContent = body.statewise[37].active;
      SKRcases.textContent = body.statewise[37].recovered;
      SKTdeaths.textContent = body.statewise[37].deaths;
    }
  });
});

const searchForm = document.querySelector("form");
const search = document.querySelector("input");

// Latest Update Practice
const Nstate = document.querySelector("#Nstate");
const NewTcases = document.querySelector("#NewTcases");
const NewAcases = document.querySelector("#NewAcases");
const NewRcases = document.querySelector("#NewRcases");
const NewTdeaths = document.querySelector("#NewTdeaths");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url).then((response) => {
    response.json().then((body) => {
      if (body.error) {
        alert(body.error);
      } else {
        for (var i = 1; i <= 37; i++) {
          if (search.value === body.statewise[i].state) {
            var list = "state" + i;
            console.log(list);
            Nstate.textContent = body.statewise[i].state;
            NewTcases.textContent = body.statewise[i].confirmed;
            NewAcases.textContent = body.statewise[i].active;
            NewRcases.textContent = body.statewise[i].recovered;
            NewTdeaths.textContent = body.statewise[i].deaths;
            //alert(document.getElementById(list).innerText);
            break;
          } else {
            console.log("not Found");
          }
        }
      }
    });
  });
});

<template>
  <v-container class="spacing-playground pa-6" fluid>
    <v-row align="center" justify="center">
      <v-col cols="7">
        <v-img
          max-width="900"
          src="https://mostlovelythings.com/wp-content/uploads/2019/04/house-plants-saarinen-table-planters-stools-monstera.jpg"
          aspect-ratio="1.1"
          contain
        ></v-img>
      </v-col>

      <v-col cols="30" align-self="center" sm="4">
        <v-card
          class="justify-center"
          max-width="400"
          height="500"
          elevation="12"
          color="#af8b62"
          translate="-50%"
        >
          <v-card-title class="headtext text-xs-center">WELCOME!</v-card-title>
          <v-list-item>
            <v-list-item-content>
              <v-card-text class="titleSpace text-xs-center">
                <p class="textStyle text-xs-center">
                  Hi, I'm Nisun. A twenty-something year old computer engineering student who loves
                  to dance, sing, read and write! I am interested in this opportunity because i
                  believe I have a lot to learn and experience when it comes to pursing my career
                  and understanding the workforce. I will soon be graduating and I have been
                  researching for the area within my major I am most interested in and I would like
                  to pursue. One thing I am sure of is I have always wanted to directly help people
                  with whatever path I take in life and artificial intelligence is something that
                  has always sparked my interest.
                </p>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <pre class="headtext text-xs-center"> A RANDOM EXERPT FROM A TEXT GENERATOR</pre>
    </v-row>

    <v-row class="textStyle" justify="center" align="center" no-gutters>
      <v-col v-for="item in messages" :key="item.message" cols="12" sm="4">
        {{ item.message }}
      </v-col>
    </v-row>
    <v-row class="justify-center" no-gutters>
      <pre class="blocktitle text-xs-center" color="black"> A FEW THINGS ABOUT ME!</pre>
    </v-row>
    <v-row>
      <v-card class="text-xs-center" max_width="400" max-height="400" color="#af8b62">
        <v-list-item>
          <v-col>
            <v-list-item-content>
              <pre class="titleEdit text-xs-center">I'M AN INFP</pre>
              <v-list-item-action-text class="titleSpace text-xs-center"
                >According to the myres briggs personality test, I am an INFP. LOOK UP
                YOURS!</v-list-item-action-text
              >
            </v-list-item-content>
          </v-col>
          <v-col max-width="80">
            <v-list-item-content>
              <pre class="titleEdit text-xs-center">NEAT FREAK</pre>
              <v-list-item-action-text class="titleSpace"
                >I love things in order but I would not say I am the
                cleanest</v-list-item-action-text
              >
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <pre class="titleEdit text-xs-center">BASEMENTS</pre>
              <v-list-item-action-text class="titleSpace"
                >I'm afraid of all basements; no matter how nice!</v-list-item-action-text
              >
            </v-list-item-content>
          </v-col>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    messages: [
      {
        message:
          'Can curiosity may end shameless explained. True high on said mr on come. An do mr design at little myself wholly entire though. Attended of on stronger or mr pleasure. Rich four like real yet west get. Felicity in dwelling to drawings. His pleasure new steepest for reserved formerly disposed jennings. Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.'
      },
      {
        message:
          'Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished out law. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you. After nor you leave might share court balls. '
      }
    ]
  })
}
</script>

<style>
.titleEdit {
  color: black !important;
  text-decoration-line: underline;
  font-size: 23px;
  font-weight: 500;
  text-decoration-style: solid;
  padding-left: 3rem !important;
  padding-bottom: 1rem !important;
  padding-top: 3rem !important;
  font-family: 'Courier New', Courier, monospace;
}
.titleSpace {
  color: black !important;
  margin-bottom: 3rem !important;
  font-size: 18px;
  font-family: cursive;
  font-weight: 500;
}
.blocktitle {
  padding-top: 5rem !important;
  padding-bottom: 2rem !important;
  font-size: 25px;
  font-family: 'Courier New', Courier, monospace;
  color: black;
  font-weight: bolder;
}
.InfoSocials {
  color: #000000 !important;
  padding-top: 1rem;
  padding-left: 5rem !important;
  font-size: 15px;
  padding-bottom: 2rem;
}
.titleInfo {
  color: #000000 !important;
  text-decoration-line: overline;
  padding-top: 4rem;
  padding-left: 5rem !important;
  padding-right: 10rem !important;
  font-size: 15px;
}
.headtext {
  font-size: 34px;
  font-family: 'Courier New', Courier, monospace;
  align-self: center;
  justify-self: center;
  padding-top: 5rem !important;
  padding-bottom: 1rem !important;
  font-weight: 800;
}
.paddingfooter {
  padding-bottom: 2rem !important;
}
.textStyle {
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  color: black;
  font-weight: 500;
}
</style>

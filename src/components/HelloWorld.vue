<template>
  <div class="container"> <div>TODO: find out undefined ??</div>
      <div id="chart" v-if="loading == false">
        <!-- i actually have no idea why we put 700% and not 100% This shit is rarted -->
        <apexchart   type="scatter" :options="options" height="700%" :series="series"></apexchart>
      </div>
      <div v-if="loading == true" class="lds-dual-ring"></div>

  </div>
</template>

<script>
/* eslint-disable prefer-destructuring */

// import { resolve } from 'dns';
// import fetch from 'node-fetch';
// https://apexcharts.com/vue-chart-demos/scatter-charts/basic/
export default {
  name: 'HelloWorld',
  // components: {
  //   apexchart: VueApexcharts,
  // },
  props: {
    msg: String,
  },
  methods: {
    paramsAsURI(object) {
      return `?${
        Object.entries(object)
          .map(
            ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
          )
          .join('&')}`;
    },
    sanitize(uglyString) {
      // TODO: 40x46 still missing
      const sanitizer = /\|(\d+)|<font color="\w+">(.+)<\/font>|style=".+" \| (\d+)|data-sort-value="{{#expr:.+}}" \|(.+)/;
      const match = uglyString.match(sanitizer);
      let dank = match?.[4] || match?.[3] || match?.[2] || match?.[1] || null;

      if (dank !== null) {
        const shotguns = dank.match(/(\d+)x(\d+)/);
        if (shotguns !== null) {
          dank = shotguns[2];
        }
      }

      //  console.log(match);
      // console.log(`dank:${dank}`);
      return dank;
    },
    /* eslint-disable */

    /* eslint-enable */
    changeSeries(x, y) {
      console.log(x, y);
      const valid = ['fleshDamage', 'penetration', 'armorDamagePercent', 'accuracyModifier', 'recoilModifier', 'fragmentationChance'];
      // if it's fucked up we return. Else we format the data :feelsdankman:
      if (!valid.includes(x) || !valid.includes(y)) { return 1; }
      const seriesDank = [];
      Object.keys(this.ammoData).forEach((key) => {
        // here, key is ammo category
        // 12x70mm|12/70 shot
        // 12x70mm|12/70 slugs
        // 20x70mm
        // 9x18mm Makarov
        // 7.62x25mm Tokarev
        // 9x19mm Parabellum
        // .45 ACP
        // 9x21mm Gyurza
        // 5.7x28mm FN
        // 4.6x30mm HK
        // 9x39mm
        // .366 TKM
        // 5.45x39mm
        // 5.56x45mm NATO
        // 7.62x39mm
        // 7.62x51mm NATO
        // 7.62x54mmR
        // 12.7x55mm STs-130
        // console.log(key);// , this.ammoData[key]);

        // INDIVIDUALLY EACH AMMO FEELS MEGADANKMAN

        // Object.keys(this.ammoData[key]).forEach((k) => {
        //   series.push({
        //     name: k,
        //     data: [[this.ammoData[key][k][x], this.ammoData[key][k][y]]],
        //   });
        // });

        // GROUP AMMO OF SAME CALIBER pajaDnak
        const dank = [];
        Object.keys(this.ammoData[key]).forEach((k) => {
          dank.push([this.ammoData[key][k][x], this.ammoData[key][k][y]]);
        });

        seriesDank.push({
          name: key,
          data: dank,
        });
      });
      this.series = seriesDank;
      // idk why tooltip loses context

      const chartOptions = {
        annotations: {

          // borderColor: 'red',
          borderWidth: 1,
          borderRadius: 2,
          textAnchor: 'end',
          position: 'right',
          offsetX: 0,
          offsetY: +15,
          style: {
            background: 'gray',
          },

        },
        axis: {
          show: true,
          type: 'numeric',

        },
        axisTitle: {
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
          },
        },

      };

      const that = this;

      // SPREAD
      this.options = {
        theme: {
          mode: 'dark',
          palette: 'palette1',

        },
        tooltip: {
          custom(
            {
              series,
              seriesIndex,
              dataPointIndex,
              w,
            },
          ) {
            // trying to search for the series in the series? KEKW
            // const found = that.series.find(element => element = series);
            // console.log(w.globals);

            // WETEFE: find by name cant work: nothing is specified about orders
            // of key in a js object
            const category = w.globals.seriesNames[seriesIndex];

            // so now we should be able to do something like

            /* this should be
          {
              ammo1:{},
              ammo2:{},
          }
          */

            // OMEGALUL AT THE FOLLOWING:
            const yVal = series[seriesIndex][dataPointIndex];
            const xVal = w.globals.seriesX[seriesIndex][dataPointIndex];
            const ammo = that.ammoData[category];
            let name = 'unknown';

            console.log(xVal, yVal);
            // eslint-disable-next-line
            for (const [key, value] of Object.entries(ammo)) {
              //   console.log(`x:${x}Value of the current item:${value[x]}value to find:${xVal}`);
              // console.log(`y:${y}Value of the current item:${value[y]}value to find:${yVal}`);

              if (value[x] - xVal === 0 && value[y] - yVal === 0) {
                name = key;
                break;
              }
              // OMEGALUL @js the following doesn't work
              /*
              if (value[x] === xVal && value[y] === yVal) {
                console.log('WATAFAK ZULUL');
              }
              */
            }
            // or by stats
            const text = `<strong>${name}</strong><br>${x}:${xVal}<br>${y}:${yVal}`;
            return text;
          },
        },
        height: '100%',
        /* eslint-enable */

        // theme: {
        //   palette: 'palette7',
        // },
        xaxis: {
          type: 'numeric',
          min: 0,
          max: 200,
          // tickAmount: 12,
          title: {
            text: x,
            ...chartOptions.axisTitle,
          },
          ...chartOptions.axis,
        },
        yaxis: {
          min: 0,
          max: 100,
          // tickAmount: 12,
          title: {
            text: y,
            ...chartOptions.axisTitle,
          },
          ...chartOptions.axis,

        },
        // legend: {
        //   // we can customize the legend here poggies
        //   show: true,
        // },
        subtitle: {
          text: '',
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '12px',
            fontWeight: 'normal',
            fontFamily: undefined,
            color: '#9699a2',
          },
        },
        annotations: {
          position: 'back',
          yaxis: [
            {
              y: 0,
              y2: 10,
              fillColor: '#ff1744',
              label: {
                text: 'Flesh',
                ...chartOptions.annotations,
              },

            },
            {
              y: 10,
              y2: 20,
              fillColor: '#ff3d00',
              label: {
                text: 'Class 1',
                ...chartOptions.annotations,
              },
            },
            {
              y: 20,
              y2: 30,
              fillColor: '#ff9100',
              label: {
                text: 'Class 2',
                ...chartOptions.annotations,
              },
            },
            {
              y: 30,
              y2: 40,
              fillColor: '#ffea00',
              label: {
                text: 'Class 3',
                ...chartOptions.annotations,
              },
            },
            {
              y: 40,
              y2: 50,
              fillColor: '#76ff03',
              label: {
                text: 'Class 4',
                ...chartOptions.annotations,
              },
            },
            {
              y: 50,
              y2: 60,
              fillColor: '#00e676',

              label: {
                text: 'Class 5',
                ...chartOptions.annotations,
              },
            },
            {
              y: 60,
              y2: 100,
              fillColor: '#00e5ff',
              label: {
                text: 'Class 6',
                ...chartOptions.annotations,
                offsetY: -150,
              },
            },
          ],
        },
      };

      return 0;
    },

  },
  data() {
    return {
      loading: true,
      options: {},
      series: [],

      // ammoData: {},
    };
  },
  // idk why we have to watch this instead of just using loading,
  // else 'changeSeries' will be called WAYTOEARLY: BRINGOFWAYTOODANK
  watch: {
    ammoData(val) {
      // check for valid object i guess?
      if (val instanceof Object && this.loading === false) {
        this.changeSeries('fleshDamage', 'penetration');
      }
    },
  },
  computed: {

  },
  asyncComputed: {
    async ammoData() {
      this.loading = true;
      const ENDPOINT = 'https://escapefromtarkov.gamepedia.com/api.php';
      const options = {
        action: 'query',
        prop: 'revisions',
        titles: 'Ballistics',
        rvslots: '*',
        rvprop: 'content',
        formatversion: '2',
        format: 'json',
        origin: '*',
      };
      const tableBeginning = '===Table===';
      // const tableEnd = '== Armor penetration and damage graph ==';

      console.log(`URL should be :${ENDPOINT}${this.paramsAsURI(options)}`);
      const URI = `${ENDPOINT}${this.paramsAsURI(options)}`;

      let res = await fetch(URI, { method: 'get' });
      console.log('Fetch should be completed');

      res = await res.json();
      //  console.log(res);
      // .then((res) => res.json())

      const text = res.query.pages[0].revisions[0].slots.main.content;
      const tablePos = text.search(tableBeginning);
      //  const endPos = text.search(tableEnd);
      const tableWithIntro = text.substring(tablePos, text.length);
      console.log(tablePos, text.length);

      //  console.log(tableWithIntro);
      // lines with rowspan 5 == ammo category
      // lines with row span 1 == ammo stat
      // const separator = /rowspan="(\d+)"/;

      const lines = tableWithIntro.split('\n');
      // const sanitized = {};
      console.log(tableWithIntro);
      const size = lines.length;
      // console.log(`text is ${lines}long`);
      // const omegalul = /\|\[\[(\w+\.*\|*\w+\.*\s*\w+\/*\w+\s*\w+-*\w+)|(\.\d+\s*\w+)/i;
      // Yoink categories:
      // every category will match the regexp finding rowspan and will have
      // at least one children with rowspan

      const supaRegEx = /rowspan="(\d+)".+\[\[(.+)]]|\[\[(.+)]]|rowspan="\d+" \|(.+)/;

      let previous;

      /*eslint-disable */
          let data = {};
          /* eslint-enable */
      for (let i = 0; i < size; i += 1) {
        // If we are on a 'weapon line'
        const dank = lines[i].match(supaRegEx);
        if (dank !== undefined && dank != null) {
          // if we can read next line && it matches
          // regex again, it means we have found the category

          //    console.log(match);
          if (i + 6 <= size) {
            const match = lines[i + 1].match(supaRegEx);
            console.log(dank);
            // idk why this match is sometimes truthy when it shouldn't be
            if (match !== undefined && match != null) {
              previous = dank?.[2] || dank?.[4] || previous;
              console.log(`peenus${previous}`);
              // or this:
              // previous = dank[2] ?? dank[4] ?? previous
              // OMEGALUL Clap. ?? will return LHS if falsy but not undefined or null
              data[previous] = data[previous] || {};
              // feelsdankman ffs
              // console.log(previous);
            } else {
              // next line is NOT another weapon so it is surely stats for the 'last' wweapon
              const ammo = dank?.[2];
              if (ammo != null || ammo !== undefined) {
                data[previous][ammo] = {
                  fleshDamage: this.sanitize(lines[i + 1]),
                  penetration: this.sanitize(lines[i + 2]),
                  armorDamagePercent: this.sanitize(lines[i + 3]),
                  accuracyModifier: this.sanitize(lines[i + 4]),
                  recoilModifier: this.sanitize(lines[i + 5]),
                  fragmentationChance: this.sanitize(lines[i + 6]),
                };
              }
            }
          }
        }
      }
      //  this.changeSeries('fleshDamage', 'penetration');
      this.loading = false;
      // this.changeSeries('fleshDamage', 'penetration');
      return new Promise((resolve) => resolve(data));
      // .catch((err) => console.log(err));
    },
  },
/*
const data = {
  12x70:
    subAmmo:{
      pen,machin,bidule,
    },
    subAmmo2:{

    }

}

*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container{
  height: 90vh;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

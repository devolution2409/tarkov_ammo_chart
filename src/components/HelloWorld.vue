<template>
  <div class="container"> TODO: find out undefined ??
  <button @click="changeSeries('fleshDamage','penetration')"> ppHop</button>

      <div id="chart" >
        <!-- i actually have no idea why we put 700% and not 100% This shit is rarted -->
        <apexchart  type="scatter" :options="options" height="700%" :series="series"></apexchart>
      </div>
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

      const annotationsOptions = {

        // borderColor: 'red',
        borderWidth: 1,
        borderRadius: 2,
        textAnchor: 'end',
        position: 'right',
        offsetX: 0,
        offsetY: +15,
        style: {
          background: 'gray',

          // color: '#777',
          // fontSize: '12px',
          // fontWeight: 400,
          // fontFamily: undefined,
          // cssClass: 'apexcharts-yaxis-annotation-label',
          // padding: {
          //   left: 5,
          //   right: 5,
          //   top: 0,
          //   bottom: 2,
          // },
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
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          show: true,
        },
        yaxis: {
          type: 'numeric',
          min: 0,
          max: 100,
          // tickAmount: 12,
          title: {
            text: y,
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          show: true,
        },
        legend: {
          // we can customize the legend here poggies
          show: true,
        },
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
              borderColor: '#000',
              fillColor: '#ff1744',
              label: {
                text: 'Flesh',
                ...annotationsOptions,
              },

            },
            {
              y: 10,
              y2: 20,
              borderColor: '#000',
              fillColor: '#ff3d00',
              label: {
                text: 'Class 1',
                ...annotationsOptions,
              },
            },
            {
              y: 20,
              y2: 30,
              borderColor: '#000',
              fillColor: '#ff9100',
              label: {
                text: 'Class 2',
                ...annotationsOptions,
              },
            },
            {
              y: 30,
              y2: 40,
              borderColor: '#000',
              fillColor: '#ffea00',
              label: {
                text: 'Class 3',
                ...annotationsOptions,
              },
            },
            {
              y: 40,
              y2: 50,
              borderColor: '#000',
              fillColor: '#76ff03',
              label: {
                text: 'Class 4',
                ...annotationsOptions,
              },
            },
            {
              y: 50,
              y2: 60,
              borderColor: '#000',
              fillColor: '#00e676',

              label: {
                text: 'Class 5',
                ...annotationsOptions,
              },
            },
            {
              y: 60,
              y2: 100,
              borderColor: '#000',
              fillColor: '#00e5ff',
              label: {
                text: 'Class 6',
                ...annotationsOptions,
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

      options: {
        height: '100px',
        xaxis: {
          type: 'numeric',
          min: 0,
          max: 200,
          tickAmount: 12,
        },
      },
      /*eslint-disable */
      series: [{
        name: 'SAMPLE A',
        data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1],
          [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2]],
      }, {
        name: 'SAMPLE B',
        data: [
          [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]],
      }, {
        name: 'SAMPLE C',
        data: [
          [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]],
      }],
      /* eslint-enable */

      // ammoData: {},
    };
  },
  computed: {

  },
  asyncComputed: {
    async ammoData() {
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
      const tableEnd = '== Armor penetration and damage graph ==';

      console.log(`URL should be :${ENDPOINT}${this.paramsAsURI(options)}`);
      const URI = `${ENDPOINT}${this.paramsAsURI(options)}`;
      let res = await fetch(URI, { method: 'get' });
      res = await res.json();
      // .then((res) => res.json())

      const text = res.query.pages[0].revisions[0].slots.main.content;
      const tablePos = text.search(tableBeginning);
      const endPos = text.search(tableEnd);
      const tableWithIntro = text.substring(tablePos, endPos);

      //  console.log(tableWithIntro);
      // lines with rowspan 5 == ammo category
      // lines with row span 1 == ammo stat
      // const separator = /rowspan="(\d+)"/;

      const lines = tableWithIntro.split('\n');
      // const sanitized = {};

      const size = lines.length;
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
        if (dank !== undefined) {
          // if we can read next line && it matches
          // regex again, it means we have found the category

          //    console.log(match);
          if (i + 6 <= size) {
            const match = lines[i + 1].match(supaRegEx);

            // idk why this match is sometimes truthy when it shouldn't be
            if (match !== undefined && match != null) {
              previous = dank?.[2] || dank?.[4] || previous;
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
      // console.log(data);

      // this.changeSeries('fleshDamage', 'penetration');
      return data;
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

</style>

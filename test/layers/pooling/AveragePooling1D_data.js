// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function() {
  var DATA = {
    'pooling.AveragePooling1D.0': {
      input: {
        data: [
          -0.570441,
          -0.454673,
          -0.285321,
          0.237249,
          0.282682,
          0.428035,
          0.160547,
          -0.332203,
          0.546391,
          0.272735,
          0.010827,
          -0.763164,
          -0.442696,
          0.381948,
          -0.676994,
          0.753553,
          -0.031788,
          0.915329,
          -0.738844,
          0.269075,
          0.434091,
          0.991585,
          -0.944288,
          0.258834,
          0.162138,
          0.565201,
          -0.492094,
          0.170854,
          -0.139788,
          -0.710674,
          0.406968,
          0.705926,
          -0.094137,
          -0.793497,
          -0.040684,
          0.522292
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          -0.204947,
          -0.393438,
          0.130535,
          0.254992,
          0.146755,
          -0.167564,
          -0.59077,
          0.325511,
          -0.121451,
          0.872569,
          -0.488038,
          0.587081,
          0.284553,
          0.635564,
          -0.293115,
          -0.311321,
          -0.090236,
          -0.094191
        ],
        shape: [ 3, 6 ]
      }
    },
    'pooling.AveragePooling1D.1': {
      input: {
        data: [
          0.275222,
          -0.793967,
          -0.468107,
          -0.841484,
          -0.295362,
          0.78175,
          0.068787,
          -0.261747,
          -0.625733,
          -0.042907,
          0.861141,
          0.85267,
          0.956439,
          0.717838,
          -0.99869,
          -0.963008,
          0.013277,
          -0.180306,
          0.832137,
          -0.385252,
          -0.524308,
          0.659706,
          -0.905127,
          0.526292,
          0.832569,
          0.084455,
          0.23838,
          -0.046178,
          -0.735871,
          0.776883,
          -0.394643,
          0.498903,
          0.029584,
          -0.17332,
          0.628159,
          0.445074
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          0.172005,
          -0.527857,
          -0.54692,
          -0.442195,
          0.282889,
          0.81721,
          0.512613,
          0.228046,
          -0.812212,
          -0.502958,
          0.437209,
          0.336182,
          0.894288,
          0.166293,
          -0.761499,
          -0.151651,
          -0.445925,
          0.172993,
          0.832353,
          -0.150399,
          -0.142964,
          0.306764,
          -0.820499,
          0.651587,
          0.218963,
          0.291679,
          0.133982,
          -0.109749,
          -0.053856,
          0.610979
        ],
        shape: [ 5, 6 ]
      }
    },
    'pooling.AveragePooling1D.2': {
      input: {
        data: [
          -0.989173,
          -0.133618,
          -0.505338,
          0.023259,
          0.503982,
          -0.303769,
          -0.436321,
          0.793911,
          0.416102,
          0.806405,
          -0.098342,
          -0.738022,
          -0.982676,
          0.805073,
          0.741244,
          -0.941634,
          -0.253526,
          -0.136544,
          -0.295772,
          0.207565,
          -0.517246,
          -0.686963,
          -0.176235,
          -0.354111,
          -0.862411,
          -0.969822,
          0.200074,
          0.290718,
          -0.038623,
          0.294839,
          0.247968,
          0.557946,
          -0.455596,
          0.6624,
          0.879529,
          -0.466772
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          -0.712747,
          0.330146,
          -0.044618,
          0.414832,
          0.20282,
          -0.520896,
          -0.579092,
          -0.381128,
          -0.158586,
          -0.198122,
          -0.107429,
          -0.029636
        ],
        shape: [ 2, 6 ]
      }
    },
    'pooling.AveragePooling1D.3': {
      input: {
        data: [
          -0.47588,
          0.366985,
          0.040173,
          0.015578,
          -0.906159,
          0.241982,
          -0.771299,
          -0.443554,
          -0.56404,
          -0.17751,
          0.541277,
          -0.233327,
          0.024369,
          0.858275,
          0.496191,
          0.980574,
          -0.59522,
          0.480899,
          0.392553,
          -0.191718,
          0.055121,
          0.289836,
          -0.498339,
          0.800408,
          0.132679,
          -0.716649,
          0.840092,
          -0.088837,
          -0.538209,
          -0.580887,
          -0.370128,
          -0.924933,
          -0.161736,
          -0.205619,
          0.793729,
          -0.354472
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          -0.62359,
          -0.038285,
          -0.261934,
          -0.080966,
          -0.182441,
          0.004328,
          0.208461,
          0.333278,
          0.275656,
          0.635205,
          -0.546779,
          0.640653,
          -0.118725,
          -0.820791,
          0.339178,
          -0.147228,
          0.12776,
          -0.46768
        ],
        shape: [ 3, 6 ]
      }
    },
    'pooling.AveragePooling1D.4': {
      input: {
        data: [
          0.024124,
          0.280236,
          -0.680013,
          -0.042458,
          -0.164273,
          0.358409,
          0.511014,
          -0.585272,
          -0.481578,
          0.692702,
          0.64189,
          -0.400252,
          -0.922248,
          -0.735105,
          -0.533918,
          0.071402,
          0.310474,
          0.369868,
          0.767931,
          -0.842066,
          -0.091189,
          0.835301,
          -0.480484,
          0.950819,
          -0.002131,
          0.086491,
          -0.480947,
          0.405572,
          -0.083803,
          -0.921447,
          -0.291545,
          0.674087,
          -0.560444,
          0.881432,
          0.076544,
          0.63549
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          0.267569,
          -0.152518,
          -0.580796,
          0.325122,
          0.238808,
          -0.020921,
          -0.205617,
          -0.660188,
          -0.507748,
          0.382052,
          0.476182,
          -0.015192,
          -0.077158,
          -0.788586,
          -0.312553,
          0.453351,
          -0.085005,
          0.660344,
          0.3829,
          -0.377788,
          -0.286068,
          0.620436,
          -0.282143,
          0.014686,
          -0.146838,
          0.380289,
          -0.520696,
          0.643502,
          -0.00363,
          -0.142979,
          -0.291545,
          0.674087,
          -0.560444,
          0.881432,
          0.076544,
          0.63549
        ],
        shape: [ 6, 6 ]
      }
    },
    'pooling.AveragePooling1D.5': {
      input: {
        data: [
          -0.072127,
          -0.553929,
          -0.355552,
          -0.936405,
          0.556627,
          -0.482815,
          -0.225337,
          -0.640315,
          0.023246,
          -0.638412,
          -0.797304,
          0.284959,
          -0.569771,
          -0.685286,
          0.002481,
          0.398436,
          0.11345,
          0.416629,
          -0.526713,
          0.962183,
          0.021732,
          0.922994,
          0.07991,
          -0.164385,
          0.461494,
          -0.982877,
          -0.142158,
          0.175741,
          -0.124041,
          -0.875609,
          -0.528708,
          -0.911127,
          0.782257,
          -0.509403,
          0.573973,
          -0.151309
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          -0.148732,
          -0.597122,
          -0.166153,
          -0.787408,
          -0.120339,
          -0.098928,
          -0.032609,
          -0.010347,
          -0.060213,
          0.549367,
          -0.022065,
          -0.519997
        ],
        shape: [ 2, 6 ]
      }
    },
    'pooling.AveragePooling1D.6': {
      input: {
        data: [
          -0.908432,
          0.172241,
          -0.59352,
          -0.831514,
          -0.948016,
          -0.194126,
          -0.242576,
          -0.89432,
          0.610714,
          -0.24071,
          -0.245859,
          0.500851,
          0.088791,
          0.04635,
          0.908568,
          -0.232197,
          -0.175815,
          -0.177919,
          -0.535898,
          0.04802,
          0.512585,
          0.854168,
          0.283045,
          0.282488,
          -0.126263,
          0.772568,
          0.403228,
          0.721107,
          -0.043311,
          -0.799013,
          -0.683105,
          -0.52703,
          0.838417,
          0.915738,
          0.180207,
          -0.181716
        ],
        shape: [ 6, 6 ]
      },
      expected: {
        data: [
          -0.354073,
          -0.225243,
          0.308587,
          -0.434807,
          -0.456563,
          0.042935,
          -0.448422,
          0.097853,
          0.584743,
          0.830338,
          0.139981,
          -0.232747
        ],
        shape: [ 2, 6 ]
      }
    },
    'pooling.AveragePooling1D.7': {
      input: {
        data: [
          0.859653,
          0.613312,
          0.262871,
          0.484585,
          0.518061,
          -0.718848,
          -0.351388,
          -0.501557,
          0.017192,
          -0.026869,
          -0.768317,
          -0.476893,
          -0.895809,
          0.764782,
          0.862057,
          0.021243,
          0.004039,
          0.760431,
          0.72102,
          0.395305,
          0.930351,
          0.425255,
          -0.000952,
          -0.060338,
          -0.095258,
          0.173776,
          -0.645557,
          0.196502,
          0.27885,
          -0.6868,
          -0.551196,
          0.726361,
          -0.382779,
          0.61877,
          0.023847,
          -0.451251,
          0.065412,
          -0.708225,
          -0.815011,
          -0.926643,
          0.323493,
          -0.063352,
          0.16365,
          -0.030438,
          -0.054635,
          0.193949,
          -0.574495,
          0.022988,
          0.36335
        ],
        shape: [ 7, 7 ]
      },
      expected: {
        data: [
          0.179048,
          0.315252,
          0.118001,
          -0.141866,
          0.020584,
          -0.807329,
          0.206697,
          0.406718,
          0.217249,
          0.080014,
          0.1589,
          0.254063,
          -0.406451,
          0.447915,
          0.261919,
          0.012494,
          -0.027723,
          -0.034381,
          0.139301,
          -0.38202,
          0.630545,
          0.522054,
          -0.22217,
          -0.202498,
          0.463845,
          0.170672,
          0.122839,
          0.383566,
          0.084285,
          -0.207447,
          -0.43992,
          -0.061303,
          -0.378549,
          0.098902,
          0.052332,
          -0.002917,
          -0.217275,
          -0.438018,
          0.0351,
          -0.627973,
          0.32175,
          0.107948,
          -0.143801,
          0.017487,
          -0.38143,
          -0.310531,
          -0.750569,
          0.173241,
          0.149999
        ],
        shape: [ 7, 7 ]
      }
    },
    'pooling.AveragePooling1D.8': {
      input: {
        data: [
          -0.830746,
          0.315868,
          -0.173506,
          0.415541,
          -0.957882,
          0.658995,
          0.795264,
          -0.147083,
          -0.042061,
          0.230065,
          0.388847,
          -0.277524,
          -0.268423,
          0.35691,
          -0.515291,
          -0.37555,
          0.367489,
          0.753251,
          -0.60764,
          -0.16741,
          -0.893275,
          -0.814508,
          -0.437352,
          0.062193,
          -0.003077,
          0.560767,
          -0.646034,
          -0.283879,
          0.097661,
          0.401756,
          -0.236235,
          -0.199824,
          -0.252007,
          -0.335503,
          0.414988,
          0.301686,
          0.309765,
          -0.349835,
          -0.274081,
          0.383308,
          -0.782973,
          -0.667924,
          0.282556,
          -0.932491,
          0.954125,
          0.837689,
          0.219229,
          -0.583405,
          -0.018424
        ],
        shape: [ 7, 7 ]
      },
      expected: {
        data: [
          -0.488914,
          0.136903,
          0.02828,
          0.402194,
          -0.617703,
          0.195286,
          0.576087,
          -0.410713,
          -0.137048,
          0.064482,
          0.18345,
          -0.099627,
          -0.382982,
          -0.254055,
          0.292121,
          -0.311363,
          0.302145,
          0.281804,
          0.301269,
          -0.683189,
          -0.343174
        ],
        shape: [ 3, 7 ]
      }
    }
  };

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA);
})();

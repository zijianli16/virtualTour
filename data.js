export default {
  "scenes": [
    {
      "id": "0-room01_dirts",
      "name": "Room01_Dirts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6691553589261225,
        "pitch": 0.40942494996030554,
        "fov": 1.3834918748083818
      },
      "linkHotspots": [
        {
          "yaw": -0.11878833586148829,
          "pitch": 0.4074262084379807,
          "rotation": 0,
          "target": "1-room01_samples"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8375627043111997,
          "pitch": 0.6321191402371689,
          "title": "Testing samples",
          "text": "Researchers put soil samples into tubes to see whether or not the biocrust has cyanobacteria. If there is cyanobacteria, the liquid will turn green."
        },
        {
          "yaw": 0.25462472801176617,
          "pitch": 0.2555230379233624,
          "title": "Inspecting samples",
          "text": "Researchers look at samples of biocrust under a microscope to see what types of cyanobacteria are in the soil, or to check the health of the biocrust."
        }
      ]
    },
    {
      "id": "1-room01_samples",
      "name": "Room01_Samples",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.575055418166686,
        "pitch": 1.0767187487762584,
        "fov": 1.3834918748083818
      },
      "linkHotspots": [
        {
          "yaw": -0.03645342260419682,
          "pitch": 0.24605616227573357,
          "rotation": 0,
          "target": "2-room01_sink"
        },
        {
          "yaw": -1.7650330754522159,
          "pitch": 0.3967029651706042,
          "rotation": 0,
          "target": "0-room01_dirts"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.817605677980385,
          "pitch": 1.108902921396659,
          "title": "Examples of biocrust",
          "text": "The dark green samples are more mature biocrust. The lighter sample shows where biocrust is still forming."
        }
      ]
    },
    {
      "id": "2-room01_sink",
      "name": "Room01_Sink",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.6680830619523288,
        "pitch": 0.9436727749699383,
        "fov": 1.3834918748083818
      },
      "linkHotspots": [
        {
          "yaw": -2.24893167780243,
          "pitch": 0.10686778768793204,
          "rotation": 0,
          "target": "3-room02_operationside"
        },
        {
          "yaw": -1.7646568496404278,
          "pitch": 0.15422363391279603,
          "rotation": 0,
          "target": "1-room01_samples"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0351273228163436,
          "pitch": 1.0658719758991921,
          "title": "Fertilizing biocrust",
          "text": "Researchers use chemicals like nitrogen to help fertilize the soil and increase biocrust growth."
        }
      ]
    },
    {
      "id": "3-room02_operationside",
      "name": "Room02_operationSide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.2776660173627139,
        "pitch": 0.2486065816777412,
        "fov": 1.4289473955563263
      },
      "linkHotspots": [
        {
          "yaw": -2.0499238063197787,
          "pitch": 0.5419768236338705,
          "rotation": 0,
          "target": "4-room02_rightside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5922032668596984,
          "pitch": 0.4203452605979212,
          "title": "Growing cyanobacteria",
          "text": "<div>Researchers grow tiny biocrust organisms in either petri dishes or in flasks. They are trying to grow as much as they can so that they can restore large areas of land.<br></div>"
        },
        {
          "yaw": -2.715701200233486,
          "pitch": 0.12140352633782214,
          "title": "Growing biocrust",
          "text": "Researchers grow tiny biocrust organisms in either petri dishes or in flasks. They are trying to grow as much as they can so that they can restore large areas of land."
        }
      ]
    },
    {
      "id": "4-room02_rightside",
      "name": "Room02_rightSide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.43877146314873094,
        "pitch": 0.8110064917964195,
        "fov": 1.4289473955563263
      },
      "linkHotspots": [
        {
          "yaw": -0.9171612162017997,
          "pitch": 0.13788090025235888,
          "rotation": 0,
          "target": "0-room01_dirts"
        },
        {
          "yaw": 0.31452978201417103,
          "pitch": 0.08140164884695267,
          "rotation": 0,
          "target": "3-room02_operationside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6489618668640169,
          "pitch": 0.8499766179563899,
          "title": "Helpful bacteria<br>",
          "text": "Researchers also grow other types of bacteria that can help the cyanobacteria grow faster."
        }
      ]
    }
  ],
  "name": "BioLab",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

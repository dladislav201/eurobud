import { AutomaticCategory } from "@/models";

export const automatics: AutomaticCategory[] = [
  {
    id: "garage-auto-section",
    type: "garage",
    title: "Гаражна автоматика",
    models: [
      {
        name: "Alutech Levigato",
        productImage: "/img/automatic-product-levigato-main.png",
        productGalleryImages: [
          "/img/automatic-product-levigato-closeup-light.jpg",
          "/img/automatic-product-levigato-closeup-dark.jpg",
          "/img/automatic-product-levigato-distant.jpg",
        ],
        price: 5300,
        isSalePrice: true,
        automaticConfigs: [
          {
            config: "LG-500",
            price: 5300,
          },
          {
            config: "LG-800",
            price: 5600,
          },
          {
            config: "LG-1200",
            price: 5930,
          },
          {
            config: "LG-600F",
            price: 7300,
          },
          {
            config: "LG-1000F",
            price: 7930,
          },
        ],
        features: [
          {
            title: "Площа воріт до",
            iconSrc: "/img/area-icon.png",
            unit: "м²",
            values: ["8,4", "11,2", "18,6", "8,4", "16"],
          },
          {
            title: "Висота воріт до",
            iconSrc: "/img/height-icon.png",
            unit: "м",
            values: ["3,3"],
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            unit: "циклів/год",
            values: ["10", "18", "18", "18", "18"],
          },
          {
            title: "Максимальна швидкість відкриття воріт",
            iconSrc: "/img/speed-icon.png",
            unit: "м/с",
            values: ["0,14", "0,15", "0,15", "0,2", "0,2"],
          },
          {
            title: "Кругова економічна led-підсвітка",
            iconSrc: "/img/led-light-icon.png",
            values: ["60LEDs"],
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду в гараж",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            unit: "Вт",
            values: ["150", "220", "330", "280", "400"],
          }
        ]
      },
      {
        name: "AN-Motors ASG",
        productImage: "/img/automatic-product-asg-main.png",
        productGalleryImages: ["/img/automatic-product-asg-main.png"],
        price: 6770,
        automaticConfigs: [
          {
            config: "ASG600/3KIT-L",
            price: 6770,
          },
          {
            config: "ASG1000/3KIT-L",
            price: 6880,
          },
          {
            config: "ASG1000/4KIT",
            price: 7220,
          },
        ],
        features: [
          {
            title: "Площа воріт до",
            iconSrc: "/img/area-icon.png",
            unit: "м²",
            values: ["8,4", "13,5", "16"],
          },
          {
            title: "Висота воріт до",
            iconSrc: "/img/height-icon.png",
            unit: "м",
            values: ["2,7", "2,7", "3,4"],
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            unit: "циклів/год",
            values: ["7"],
          },
          {
            title: "Максимальна швидкість відкриття воріт",
            iconSrc: "/img/speed-icon.png",
            unit: "м/с",
            values: ["0,15"],
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду в гараж",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            unit: "Вт",
            values: ["200", "300", "300"],
          }
        ]
      },
    ],
  },
  {
    id: "sliding-auto-section",
    type: "sliding",
    title: "Відкатна автоматика",
    models: [
      {
        name: "Alutech Roteo",
        productImage: "/img/automatic-product-roteo-main.png",
        productGalleryImages: [
          "/img/automatic-product-roteo-main.png", 
          "/img/automatic-product-roteo-sideview.png", 
          "/img/automatic-product-roteo-caption.png", 
          "/img/automatic-product-roteo-distant.jpg"
        ],
        price: 9600,
        isSalePrice: true,
        automaticConfigs: [
          {
            config: "RTO-500M",
            price: 9900,
          },
          {
            config: "RTO-1000M",
            price: 11100,
          },
          {
            config: "RTO-2000M",
            price: 15300,
          },
          {
            config: "RTO-500",
            price: 9600,
          },
          {
            config: "RTO-1000",
            price: 10900,
          },
          {
            config: "RTO-2000",
            price: 15100,
          },
        ],
        features: [
          {
            title: "Максимальна вага воріт",
            iconSrc: "/img/weight-icon.png",
            unit: "кг",
            values: ["500", "1000", "2000", "500", "1000", "2000"],
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            unit: "%",
            values: ["25", "25", "50", "25", "25", "50"],
          },
          {
            title: "Максимальна швидкість відкриття воріт",
            iconSrc: "/img/speed-icon.png",
            unit: "м/с",
            values: ["0,2"],
          },
          {
            title: "Витримує температури",
            iconSrc: "/img/snowflake-icon.png",
            values: ["від -30°С до +65°С"],
          },
          {
            title: "Кругова економічна led-підсвітка",
            iconSrc: "/img/led-light-icon.png",
            values: ["60LEDs"],
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду в гараж",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            unit: "Вт",
            values: ["250", "500", "1000", "250", "500", "1000"],
          }
        ]
      },
      {
        name: "AN-Motors ASL",
        productImage: "/img/automatic-product-asl-main.png",
        productGalleryImages: ["/img/automatic-product-asl-main.png"],
        price: 9660,
        automaticConfigs: [
          {
            config: "ASL500/KIT-U",
            price: 9660,
          },
          {
            config: "ASL1000/KIT-U",
            price: 10200,
          },
          {
            config: "ASL2000/KIT-U",
            price: 14700,
          },
        ],
        features: [
          {
            title: "Максимальна вага воріт",
            iconSrc: "/img/weight-icon.png",
            unit: "кг",
            values: [500, 1000, 2000],
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            unit: "%",
            values: ["25"],
          },
          {
            title: "Максимальна швидкість відкриття воріт",
            iconSrc: "/img/speed-icon.png",
            unit: "м/с",
            values: ["0,2"],
          },
          {
            title: "Витримує температури",
            iconSrc: "/img/snowflake-icon.png",
            values: ["від -20°С до +65°С"],
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду в гараж",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            unit: "Вт",
            values: [250, 500, 1000],
          }
        ]
      },
    ],
  },
  {
    id: "swing-auto-section",
    type: "swing",
    title: "Розпашна автоматика",
    models: [
      {
        name: "Alutech Scopio",
        productImage: "/img/automatic-product-scopio-main.png",
        productGalleryImages: [
          "/img/automatic-product-scopio-distant.jpg",
          "/img/automatic-product-scopio-closeup-light.jpg",
          "/img/automatic-product-scopio-closeup-dark.jpg"
        ],
        price: 16440,
        isSalePrice: true,
        automaticConfigs: [
          {
            config: "SC-3000SKIT-U",
            price: 16440,
          },
        ],
        features: [
          {
            title: "Максимальна вага стулки",
            iconSrc: "/img/weight-icon.png",
            values: [350],
            unit: "кг",
          },
          {
            title: "Максимальна ширина стулки",
            iconSrc: "/img/width-icon.png",
            values: [3],
            unit: "м",
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            values: [25],
            unit: "%",
          },
          {
            title: "Витримує температури",
            iconSrc: "/img/snowflake-icon.png",
            values: ["від -30°С до +65°С"],
          },
          {
            title: "Сигнальна економічна led-підсвітка",
            iconSrc: "/img/led-light-icon.png",
            values: ["60LEDs"],
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду на ділянку",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            values: [150],
            unit: "Вт",
          }
        ]
      },
      {
        name: "Alutech Ambo",
        productImage: "/img/automatic-product-ambo-main.png",
        productGalleryImages: [
          "/img/automatic-product-ambo-distant.jpg",
          "/img/automatic-product-ambo-caption-dust-protection.png",
          "/img/automatic-product-ambo-caption-reliability.png"
        ],
        price: 26600,
        automaticConfigs: [
          {
            config: "AM-5000KIT-N-U",
            price: 26600,
          },
        ],
        features: [
          {
            title: "Максимальна вага стулки",
            iconSrc: "/img/weight-icon.png",
            values: [500],
            unit: "кг",
          },
          {
            title: "Максимальна ширина стулки",
            iconSrc: "/img/width-icon.png",
            values: [3],
            unit: "м",
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            values: [25],
            unit: "%",
          },
          {
            title: "Витримує температури",
            iconSrc: "/img/snowflake-icon.png",
            values: ["від -30°С до +65°С"],
          },
          {
            title: "Сигнальна підсвітка",
            iconSrc: "/img/led-light-icon.png",
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду на ділянку",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            values: [150],
            unit: "Вт",
          }
        ]
      },
      {
        name: "Alutech Twisto",
        productImage: "/img/automatic-product-twisto-main.png",
        productGalleryImages: [
          "/img/automatic-product-twisto-distant.jpg",
          "/img/automatic-product-twisto-distant2.jpg"
        ],
        price: 23900,
        isNewProduct: true,
        automaticConfigs: [
          {
            config: "TW-4000SKIT-U",
            price: 23900,
          },
        ],
        features: [
          {
            title: "Максимальна вага стулки",
            iconSrc: "/img/weight-icon.png",
            values: [350],
            unit: "кг",
          },
          {
            title: "Максимальна ширина стулки",
            iconSrc: "/img/width-icon.png",
            values: [3],
            unit: "м",
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            values: [25],
            unit: "%",
          },
          {
            title: "Витримує температури",
            iconSrc: "/img/snowflake-icon.png",
            values: ["від -30°С до +65°С"],
          },
          {
            title: "Кругова економічна led-підсвітка",
            iconSrc: "/img/led-light-icon.png",
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду на ділянку",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            values: [150],
            unit: "Вт",
          }
        ]
      },
      {
        name: "AN-Motors ASW",
        productImage: "/img/automatic-product-asw-main.png",
        productGalleryImages: [
          "/img/automatic-product-asw-main.png",
          "/img/automatic-product-asw-closeup.png"
        ],
        price: 21300,
        isNewProduct: true,
        automaticConfigs: [
          {
            config: "ASW4000KIT-U",
            price: 21300,
          },
        ],
        features: [
          {
            title: "Максимальна вага стулки",
            iconSrc: "/img/weight-icon.png",
            values: [400],
            unit: "кг",
          },
          {
            title: "Максимальна ширина стулки",
            iconSrc: "/img/width-icon.png",
            values: [4],
            unit: "м",
          },
          {
            title: "Інтенсивність використання",
            iconSrc: "/img/cycle-icon.png",
            values: [25],
            unit: "%",
          },
          {
            title: "Витримує температури",
            iconSrc: "/img/snowflake-icon.png",
            values: ["від -20°С до +65°С"],
          },
          {
            title: "Блокування воріт під час вимкнення електроенергії",
            iconSrc: "/img/lock-icon.png",
          },
          {
            title: "Функція виявлення перешкод",
            iconSrc: "/img/obstacle-icon.png",
          },
          {
            title: "Автозакриття воріт після в'їзду на ділянку",
            iconSrc: "/img/auto-icon.png",
          },
          {
            title: "Потужність",
            iconSrc: "/img/lightning-icon.png",
            values: [120],
            unit: "Вт",
          }
        ]
      },
    ],
  },
];
import { Product } from "@/models";

export const products: Product[] = [
    {
        id: 1,
        title: "Ворота",
        linkUrl: "/gate",
        description: "Гаражні ворота для зручного та безпечного паркування, відкатні ворота для економії простору та розпашні ворота для естетичного вигляду.",
        imgSrc: "/img/gate.jpg"
    },
    {
        id: 2,
        title: "Автоматика",
        linkUrl: "/automatic",
        description: "Забудьте про відкривання воріт вручну. Керуйте воротами, просто натискаючи кнопку на пульті.",
        videoSrc: "/video/gate-garage-clip.mp4",
        posterSrc: "/img/gate-garage-poster.jpg"
    },
    {
        id: 3,
        title: "Розсувні системи",
        linkUrl: "/panorama",
        description: "Перетворіть цілу стіну на панораму, яку можна відкривати та закривати одним рухом. Насолоджуйтеся пейзажем, навіть не виходячи з дому.",
        videoSrc: "/video/panorama-clip.mp4",
        posterSrc: "/img/panorama-poster.jpg"
    },
    // {
    //     id: 4,
    //     title: "Ролети",
    //     linkUrl: "/shutter",
    //     description: "Легке керування та сучасний дизайн дозволять вам регулювати освітлення та приватність за вашим бажанням.",
    //     videoSrc: "/video/shutter-clip.mp4",
    //     posterSrc: "/img/shutter-poster.jpg"
    // },
    // {
    //     id:5,
    //     title: "Шлагбауми",
    //     linkUrl: "/barrier",
    //     description: "Швидко та ефективно контролюють доступ, знижуючи ризики та оптимізуючи трафік.",
    //     imgSrc: "/img/barrier.jpg",
    // }
];
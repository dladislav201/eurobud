import { Gate } from "@/models";

export const gates: Gate[] = [
    {
        id: 1,
        title: "Гаражні ворота",
        linkUrl: "/gate/garage",
        saleProcent: 25,
        description: "Стильне доповнення до вашого будинку, що забезпечує безпеку вашого автомобіля та робить паркування ще більш комфортним.",
        imgSrc: "/img/group-gates-garage.jpg"
    },
    {
        id: 2,
        title: "Відкатні ворота",
        linkUrl: "/gate/sliding",
        saleProcent: 18,
        description: "Забудьте про відкривання воріт вручну. Керуйте воротами, просто натискаючи кнопку на пульті.",
        imgSrc: "/img/group-gates-sliding.jpg"
    },
    {
        id: 3,
        title: "Розпашні ворота",
        linkUrl: "/gate/swing",
        description: "Перетворіть цілу стіну на панораму, яку можна відкривати та закривати одним рухом. Насолоджуйтеся пейзажем, навіть не виходячи з дому.",
        imgSrc: "/img/product-swing-gate.jpg"
    }
]
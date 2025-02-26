import { productSale } from "@/data";
import Link from "next/link";
import "./ribbon.scss";

interface RibbonProps {
  saleProduct: string;
  saleProcent: number;
}

export const Ribbon = ({ saleProduct, saleProcent }: RibbonProps) => {
  return (
    <div className="sale-container">
      <p className="sale-container-text">
        Зберігайте до {saleProcent}% при покупці {saleProduct} до{" "}
        {productSale.priceValidityPeriod} зі знижкою.{" "}
        <Link className="sale-test-link" href="/conversation">
          Замовити розрахунок
          <span className="material-symbols-outlined special">
            chevron_right
          </span>
        </Link>
      </p>
    </div>
  );
};

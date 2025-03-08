import Link from "next/link";
import { Gate } from "@/models";
import "./GateProducts.scss";

interface GateProductsProps {
  gate: Gate;
}

export const GateProducts = ({ gate }: GateProductsProps) => {
  const { title, linkUrl, saleProcent, description, imgSrc } = gate;

  return (
    <div className="gates-product garage">
      <div className="wrapper inline-wide center">
        {saleProcent && (
          <div className="sale-wrapper">
            <p className="sale-eyebrow">до {saleProcent}% знижки</p>
          </div>
        )}
        <h1 className="headline medium">{title}</h1>
      </div>
      <div className="gates-picture-wrapper">
        <Link href={linkUrl} className="media-btn"></Link>
        <img className="gates-picture" src={imgSrc} alt={title} />
      </div>
      <div className="wrapper inline-wide center">
        <p className="description small">{description}</p>
      </div>
      <div className="btn-groove">
        <Link href="/conversation" className="btn btn-main btn-small">
          Замовити
        </Link>
        <Link href={linkUrl} className="btn btn-secondary btn-small">
          Детальніше
        </Link>
      </div>
    </div>
  );
};

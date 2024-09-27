import { BaseModal } from "@/entities/BaseModal";
import { Link } from "react-router-dom";
import { AssetCard } from "./AssetCard";

export default function AssetLink({ asset }: { asset: BaseModal }) {
  const assetRoute = `/asset/${asset.name.toLocaleLowerCase()}`;
  return (
    <Link to={assetRoute} className="w-full">
      <AssetCard title={asset.name} description={asset.description} />
    </Link>
  );
}

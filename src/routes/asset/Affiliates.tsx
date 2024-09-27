import { Badge } from "@/components/ui/badge";
import { Affiliate } from "@/entities/BaseModal";

export default function Affiliates({
  affiliates,
}: {
  affiliates: Affiliate[];
}) {
  return (
    <div className="mt-8">
      <div className="text-3xl font-semibold">Affiliates</div>
      <div className="flex gap-4 mt-2">
        {affiliates.map((a) => {
          return (
            <Badge
              key={a}
              variant="secondary"
              className="py-1 px-3 font-semibold text-gray-500 border border-gray-300"
            >
              {a}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

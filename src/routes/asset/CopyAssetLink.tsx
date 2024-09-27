import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";

export default function CopyAssetLink() {
  return (
    <Link2
      className="absolute w-4 right-10 top-3 cursor-pointer -rotate-45"
      onClick={() => {
        window.navigator.clipboard.writeText(window.location.href);
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          description: "Asset link copied to clipboard.",
        });
      }}
    />
  );
}

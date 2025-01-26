import DaisyAccordion from "@/components/daisy/accordion";
import DaisyAvatarGroup from "@/components/daisy/avatar-group";
import DaisyButtons from "@/components/daisy/buttons";
import DaisyCardBadge from "@/components/daisy/cards/card-badge";
import DaisyCardImageOverlay from "@/components/daisy/cards/card-image-overlay";
import DaisyCollapse from "@/components/daisy/collapse";
import DaisyDiff from "@/components/daisy/diff";
import DaisyDropdown from "@/components/daisy/dropdown";
import DaisyStats from "@/components/daisy/stats";

export default function DaisyComponents() {
  return (
    <div className="space-y-3">
      <div className="space-y-4">
        <DaisyButtons />
        <div className="flex gap-4">
          <DaisyDropdown />
          <DaisyAvatarGroup />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <DaisyAccordion />
          </div>
          <div className="w-1/2">
            <DaisyCardImageOverlay />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <DaisyCardBadge />
        </div>
      </div>
      <DaisyCollapse />
      <DaisyDiff />
      <DaisyStats />
    </div>
  );
}

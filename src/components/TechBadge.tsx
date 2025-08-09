import { Badge } from "@/components/ui/badge";

export const TechBadge = ({ label }: { label: string }) => (
  <Badge variant="secondary" className="font-mono">{label}</Badge>
);

export default TechBadge;

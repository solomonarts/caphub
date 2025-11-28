import { Badge } from "@/components/ui/badge";

interface IndustryTagProps {
  industry: string;
}

const industryColors: Record<string, string> = {
  "FinTech": "bg-primary text-primary-foreground border-primary/20",
  "HealthTech": "bg-chart-2 text-white border-chart-2/20",
  "AI/ML": "bg-accent text-accent-foreground border-accent/20",
  "SaaS": "bg-chart-4 text-white border-chart-4/20",
  "E-commerce": "bg-chart-5 text-white border-chart-5/20",
  "CleanTech": "bg-success text-white border-success/20",
  "EdTech": "bg-info text-white border-info/20",
};

export const IndustryTag = ({ industry }: IndustryTagProps) => {
  const colorClass = industryColors[industry] || "bg-muted text-muted-foreground";
  
  return (
    <Badge className={`${colorClass} border font-semibold px-3 py-1`} variant="secondary">
      {industry}
    </Badge>
  );
};

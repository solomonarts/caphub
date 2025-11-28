import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressCircle } from "./ProgressCircle";
import { MiniChart } from "./MiniChart";
import { IndustryTag } from "./IndustryTag";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const percentage = Math.round((project.currentFunding / project.fundingGoal) * 100);
  
  const tierColors = {
    alpha: "bg-alpha text-alpha-foreground",
    featured: "bg-featured text-featured-foreground",
    general: "bg-muted text-muted-foreground",
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 font-bold">{project.name}</CardTitle>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </div>
          <ProgressCircle percentage={percentage} size={64} strokeWidth={6} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <IndustryTag industry={project.industry} />
          <Badge className={tierColors[project.tier]} variant="secondary">
            {project.tier.charAt(0).toUpperCase() + project.tier.slice(1)}
          </Badge>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground font-medium">Funding Goal</span>
            <span className="font-bold">
              ${(project.fundingGoal / 1000).toFixed(0)}K
            </span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground font-medium">Current</span>
            <span className="font-bold text-primary">
              ${(project.currentFunding / 1000).toFixed(0)}K
            </span>
          </div>
          <MiniChart data={project.fundingHistory} />
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/projects/${project.id}`} className="w-full">
          <Button className="w-full group-hover:bg-primary/90 rounded-full font-semibold">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

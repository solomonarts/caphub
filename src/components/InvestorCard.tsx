import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IndustryTag } from "./IndustryTag";
import { Investor } from "@/lib/types";
import { Briefcase, TrendingUp } from "lucide-react";

interface InvestorCardProps {
  investor: Investor;
}

export const InvestorCard = ({ investor }: InvestorCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarImage src={investor.avatar} alt={investor.name} />
            <AvatarFallback className="text-lg font-bold">{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-1">{investor.name}</h3>
            <p className="text-sm text-muted-foreground font-medium">{investor.location}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{investor.bio}</p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground font-medium">Portfolio</div>
              <div className="font-bold text-sm">
                ${(investor.portfolioSize / 1000000).toFixed(1)}M
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <Briefcase className="h-5 w-5 text-accent" />
            <div>
              <div className="text-xs text-muted-foreground font-medium">Projects</div>
              <div className="font-bold text-sm">{investor.projectCount}</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {investor.industries.map((industry) => (
            <IndustryTag key={industry} industry={industry} />
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/investors/${investor.id}`} className="w-full">
          <Button className="w-full group-hover:bg-primary/90 rounded-full font-semibold">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

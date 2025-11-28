import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IndustryTag } from "@/components/IndustryTag";
import { mockInvestors } from "@/lib/mockData";
import { ArrowLeft, Briefcase, TrendingUp, Mail, MapPin, Trophy } from "lucide-react";

const InvestorDetail = () => {
  const { id } = useParams();
  const investor = mockInvestors.find(i => i.id === id);
  
  if (!investor) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Investor not found</h1>
          <Link to="/investors">
            <Button>Back to Investors</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/investors">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Investors
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={investor.avatar} alt={investor.name} />
                    <AvatarFallback className="text-2xl">
                      {investor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{investor.name}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{investor.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {investor.industries.map(industry => (
                        <IndustryTag key={industry} industry={industry} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <TrendingUp className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Portfolio Size</div>
                    <div className="font-bold text-xl">${(investor.portfolioSize / 1000000).toFixed(1)}M</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Briefcase className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Total Investments</div>
                    <div className="font-bold text-xl">{investor.projectCount}</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Trophy className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Successful Exits</div>
                    <div className="font-bold text-xl">{investor.exits.length}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed">{investor.fullBio}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {investor.investments.map((investment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{investment.projectLogo}</div>
                        <div>
                          <div className="font-semibold">{investment.projectName}</div>
                          <div className="text-sm text-muted-foreground">Invested: {investment.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">${(investment.amount / 1000).toFixed(0)}K</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {investor.exits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Successful Exits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {investor.exits.map((exit, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <div className="font-semibold">{exit.projectName}</div>
                          <div className="text-sm text-muted-foreground">Exit Year: {exit.year}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-success">${(exit.amount / 1000000).toFixed(1)}M</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <Button className="w-full" size="lg">
                  Pitch This Investor
                </Button>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${investor.contact}`} className="text-primary hover:underline">
                      {investor.contact}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{investor.location}</span>
                  </div>
                </div>

                <p className="text-xs text-center text-muted-foreground pt-4">
                  Submit your pitch deck and schedule a meeting
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Investment Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Industries</div>
                  <div className="flex flex-wrap gap-2">
                    {investor.industries.map(industry => (
                      <IndustryTag key={industry} industry={industry} />
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <div className="text-sm text-muted-foreground mb-2">Typical Investment</div>
                  <div className="font-semibold">
                    ${(investor.portfolioSize / investor.projectCount / 1000).toFixed(0)}K average
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestorDetail;

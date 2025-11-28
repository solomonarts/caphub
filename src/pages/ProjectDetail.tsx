import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ProgressCircle } from "@/components/ProgressCircle";
import { MiniChart } from "@/components/MiniChart";
import { IndustryTag } from "@/components/IndustryTag";
import { mockProjects } from "@/lib/mockData";
import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const percentage = Math.round((project.currentFunding / project.fundingGoal) * 100);
  const otherProjects = mockProjects.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-3">{project.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <IndustryTag industry={project.industry} />
                      <Badge variant="secondary" className={
                        project.tier === "alpha" ? "bg-alpha text-alpha-foreground" :
                        project.tier === "featured" ? "bg-featured text-featured-foreground" :
                        "bg-muted text-muted-foreground"
                      }>
                        {project.tier.charAt(0).toUpperCase() + project.tier.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <ProgressCircle percentage={percentage} size={100} strokeWidth={10} />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">About this Project</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Target className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Funding Goal</div>
                    <div className="font-bold text-xl">${(project.fundingGoal / 1000).toFixed(0)}K</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <TrendingUp className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Current Funding</div>
                    <div className="font-bold text-xl text-primary">${(project.currentFunding / 1000).toFixed(0)}K</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Users className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Team Size</div>
                    <div className="font-bold text-xl">{project.team.length} Members</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Funding Progress</h3>
                  <div className="h-24">
                    <MiniChart data={project.fundingHistory} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Meet the Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.team.map(member => (
                    <div key={member.id} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full" size="lg">
                  Invite to Pitch
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Connect with the founders and schedule a pitch meeting
                </p>
              </CardContent>
            </Card>

            {otherProjects.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {otherProjects.map(p => (
                    <Link key={p.id} to={`/projects/${p.id}`}>
                      <div className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="font-semibold mb-1">{p.name}</div>
                        <div className="text-sm text-muted-foreground line-clamp-2">{p.description}</div>
                        <div className="mt-2">
                          <IndustryTag industry={p.industry} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;

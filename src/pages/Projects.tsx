import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { mockProjects } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState<string>("all");

  const alphaProjects = mockProjects.filter(p => p.tier === "alpha");
  const featuredProjects = mockProjects.filter(p => p.tier === "featured");
  const generalProjects = mockProjects.filter(p => p.tier === "general");

  const filterProjects = (projects: typeof mockProjects) => {
    return projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = industryFilter === "all" || project.industry === industryFilter;
      return matchesSearch && matchesIndustry;
    });
  };

  const industries = Array.from(new Set(mockProjects.map(p => p.industry)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Discover Projects</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Explore innovative startups seeking funding and partnership opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filterProjects(alphaProjects).length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold">Alpha Projects</h2>
              <span className="px-3 py-1 bg-alpha text-alpha-foreground rounded-full text-sm font-medium">
                Exclusive
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects(alphaProjects).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {filterProjects(featuredProjects).length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <span className="px-3 py-1 bg-featured text-featured-foreground rounded-full text-sm font-medium">
                Trending
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects(featuredProjects).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {filterProjects(generalProjects).length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects(generalProjects).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {filterProjects(mockProjects).length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;

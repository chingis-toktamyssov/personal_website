import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  imageUrl: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  githubUrl, 
  demoUrl, 
  videoUrl, 
  imageUrl 
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${title} project screenshot`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          
          {demoUrl && (
            <Button variant="secondary" size="sm" asChild className="flex items-center gap-2">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Parts, Schematics and Pictures
              </a>
            </Button>
          )}
          
          {videoUrl && (
            <Button variant="ghost" size="sm" asChild className="flex items-center gap-2">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                Video
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
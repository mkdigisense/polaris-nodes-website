import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Marko Hiltunen",
    title: "Finance and Management",
    linkedin: "https://www.linkedin.com/in/marko-hiltunen-846254150/",
  },
  {
    name: "Miika Keisu",
    title: "Technical Lead",
    linkedin: "https://www.linkedin.com/in/miika-keisu/",
  },
  {
    name: "Janne Anttila",
    title: "Projects and Operations",
    linkedin: "https://www.linkedin.com/in/janne-anttila-a7a793b4/",
  },
  {
    name: "Rihard Romka",
    title: "Project Engineer",
    linkedin: "https://www.linkedin.com/in/rihard-romka/",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative bg-surface/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="text-gradient">Crypto-Native</span> Team
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PolarisNodes is run by a small, focused team combining hands-on node infrastructure expertise with a strong understanding of blockchain markets and well-managed, high-quality operations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="glass rounded-xl p-6 text-center group hover:bg-card/80 transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 mx-auto mb-4 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                <span className="font-display text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {member.title}
              </p>
              
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

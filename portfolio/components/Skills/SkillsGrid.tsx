interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {categories.map((category, index) => (
        <SkillCategory
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
}

function SkillCategory({ title, skills }: SkillCategory) {
  return (
    <div>
      <h3 className="text-base font-bold text-text-primary mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg text-text-primary">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

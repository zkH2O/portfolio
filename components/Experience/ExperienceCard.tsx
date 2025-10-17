interface ExperienceCardProps {
  company: string;
  role: string;
  dates: string;
  description?: string;
  achievements?: string[];
}

export function ExperienceCard({
  company,
  role,
  dates,
  description,
  achievements = [],
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border-gray p-8 shadow-sm">
      <div className="mb-4">
        <div className="flex flex-wrap justify-between items-baseline mb-2">
          <h3 className="text-2xl font-bold text-text-primary">{company}</h3>
          <span className="text-base text-text-secondary">{dates}</span>
        </div>
        <p className="text-lg text-text-primary font-medium">{role}</p>
      </div>

      {description && (
        <p className="text-base text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>
      )}

      {achievements.length > 0 && (
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-base text-text-primary leading-relaxed"
            >
              • {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

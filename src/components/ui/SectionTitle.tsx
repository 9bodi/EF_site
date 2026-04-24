interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-text max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}


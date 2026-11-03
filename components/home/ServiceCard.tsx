interface ServiceCardProps {
  title: string;
  mainText: string;
  buttonText: string;
  showDivider?: boolean;
  dividerPosition?: "bottom" | "right";
}

export default function ServiceCard({
  title,
  mainText,
  buttonText,
  showDivider = false,
  dividerPosition = "bottom",
}: ServiceCardProps) {
  return (
    <div
      className={`flex-1 ${
        dividerPosition === "bottom" ? "py-8 pb-12" : "pt-16 pb-8"
      } md:py-10 md:px-12 text-center ${showDivider ? "relative" : ""}`}
    >
      {showDivider && dividerPosition === "bottom" && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-brand-gray/30 md:hidden"></div>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-brand-gray/70 mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <p
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-red mb-6"
        dangerouslySetInnerHTML={{ __html: mainText }}
      />
      <button className="px-6 py-3 border-2 border-brand-gray text-brand-gray font-semibold rounded-lg hover:bg-brand-gray hover:text-white transition-colors">
        {buttonText}
      </button>
    </div>
  );
}

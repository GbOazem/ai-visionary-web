import { Language } from "@/lib/language";

type Props = {
  language: Language;
  onChange: (language: Language) => void;
};

const base = "px-2.5 py-1 rounded-md text-xs border transition-colors";

export default function LanguageToggle({ language, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`${base} ${language === "en" ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange("pt-BR")}
        className={`${base} ${language === "pt-BR" ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:text-foreground"}`}
      >
        PT-BR
      </button>
    </div>
  );
}

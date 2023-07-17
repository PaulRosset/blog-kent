import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: fr })}
    </time>
  );
}

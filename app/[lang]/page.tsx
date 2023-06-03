import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries/getDictionary";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale is: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["startPage"].hello}
      </p>
    </div>
  );
}

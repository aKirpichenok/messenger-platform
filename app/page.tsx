import { Locale } from "@/configs/i18n-config";
import { getDictionary } from "@/dictionaries/getDictionary";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      {/* <LocaleSwitcher /> */}
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["startPage"].hello}
      </p>
      {/* <Counter dictionary={dictionary.counter} /> */}
    </div>
  );
}

import React, { SelectHTMLAttributes } from "react";
import { TFunction } from "next-i18next";
import { withTranslation, i18n, useTranslation } from "next-i18next";

const I18NExampleComponent: React.FC = () => {
  const { t } = useTranslation(["home", "common"]);
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value, "value");
    i18n?.changeLanguage(value);
  };
  return (
    <div>
      <header>
        <h2>{t`home:title`}</h2>
        <div>
          <select onChange={changeLanguage}>
            <option value="">SelectLanguage</option>
            <option value="en">En</option>
            <option value="fa">FA</option>
            <option value="tr">TR</option>
          </select>
        </div>
      </header>
      <main>
        <p>{t("common:greet", { name: t`common:world` })}</p>
        <p>{t`home:someText`}</p>
      </main>
      <footer>
        <a
          href="https://github.com/isaachinman/next-i18next"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t`common:documentation`}
        </a>
      </footer>
    </div>
  );
};

export const I18NExample = withTranslation(["home", "common"])(
  I18NExampleComponent
);

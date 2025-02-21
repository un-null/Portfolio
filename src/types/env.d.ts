declare namespace NodeJS {
  interface ProcessEnv {
    readonly NOTION_TOKEN: string;
    readonly NOTION_DATABASE_ID_WORKS: string;
    readonly NOTION_DATABASE_ID_FORM: string;
    readonly NOTION_DATABASE_ID_BLOG: string;
    readonly NOTION_DATABASE_ID_PROJECT_HOME: string;
    readonly NOTION_DATABASE_ID_PROJECT_WORKS: string;

    readonly NEXT_PUBLIC_HOSTNAME: string;
  }
}

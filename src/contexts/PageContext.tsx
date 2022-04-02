import React, { Dispatch, SetStateAction } from "react";

export interface PageContextType {
  pageList: PageType[];
  setPageList: Dispatch<SetStateAction<PageType[]>>;
}

export type PageType = {
  label: string; // Page label
  slug: string; // Page slug
  icon: string; // Material icons text content
};

const defaultPageContext: PageContextType = {
  pageList: [],
  setPageList: () => [],
};

export const PageListContext =
  React.createContext<PageContextType>(defaultPageContext);

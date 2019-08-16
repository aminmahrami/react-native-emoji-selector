import { EmojiData } from "emoji-datasource";
import React from "react";

export enum EmojiCategory {
  All = ".all",
  History = ".history",
  People = ".people",
  Nature = ".nature",
  Food = ".food",
  Activities = ".activities",
  Places = ".places",
  Objects = ".objects",
  Symbols = ".symbols",
  Flags = ".flags"
}

interface Props {
  onEmojiSelected(emoji: EmojiData): void;
  onTabSelected(tab: string): void;
  theme?: string;
  showTabs?: boolean;
  showSearchBar?: boolean;
  showHistory?: boolean;
  category?: EmojiCategory;
  columns?: number;
  showSectionTitles?: boolean;
  placeholder?: string;
}

export default class EmojiSelector extends React.Component<Props, any> {}

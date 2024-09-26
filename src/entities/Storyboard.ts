import { BaseModal } from "./BaseModal";
import { Layout } from "./Layout";

export interface Storyboard extends BaseModal {
  layout: Layout;
  stories: string[];
}

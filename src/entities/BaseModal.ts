export interface BaseModal {
  name: string;
  description: string;
  modalType: ModalType;
  userHasAccess?: boolean | undefined;
  affiliates?: Affiliate[] | undefined;
}

export type ModalType = "KPI" | "LAYOUT" | "STORYBOARD";

export type Affiliate =
  | "Engineering"
  | "Marketing"
  | "Product"
  | "Sales"
  | "HR"
  | "Finance"
  | "Other";

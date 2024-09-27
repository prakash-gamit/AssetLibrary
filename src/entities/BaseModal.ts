export interface BaseModal {
  name: string;
  description: string;
  modalType: ModalType;
  userHasAccess?: boolean | undefined;
}

export type ModalType = "KPI" | "LAYOUT" | "STORYBOARD";

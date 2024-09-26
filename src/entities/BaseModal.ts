export interface BaseModal {
  name: string;
  descrioption: string;
  modalType: ModalType;
  userHasAccess?: boolean | undefined;
}

export type ModalType = "KPI" | "LAYOUT" | "STORYBOARD";

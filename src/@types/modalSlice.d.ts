export type ModalType = "menu" | "auth";

export interface ModalSliceObject {
  isOpen: Record<ModalType, boolean>;
}

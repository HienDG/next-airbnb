export type ModalType = "menu";

export interface ModalSliceObject {
  isOpen: Record<ModalType, boolean>;
}

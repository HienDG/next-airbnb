import React, { useRef, useEffect, useCallback } from "react";

import { ModalType } from "types/modalSlice";

import { useAppDispatch, useAppSelector } from "@src/hooks";

import { closeModal } from "@app/modalSlice";

const useDetectClickOutsideModal = <T extends HTMLElement>(key: ModalType): React.RefObject<T> => {
  const dispatch = useAppDispatch();
  const ref = useRef<T>(null);
  const isOpen = useAppSelector((state) => state.modal.isOpen[key]);

  const detectClickOutside = useCallback(
    (event: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
        dispatch(closeModal(key));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("click", detectClickOutside);

    return () => {
      document.removeEventListener("click", detectClickOutside);
    };
  }, [dispatch, isOpen]);

  return ref;
};

export default useDetectClickOutsideModal;

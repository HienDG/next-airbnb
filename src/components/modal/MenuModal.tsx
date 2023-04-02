import React, { useCallback } from "react";

import { Button } from "@components/ui";

import { useAppDispatch } from "@src/hooks";

import { closeModal, openModal } from "@src/app/modalSlice";

const MenuModal = () => {
  const dispatch = useAppDispatch();

  const openAuthModal = useCallback(() => {
    dispatch(openModal("auth"));

    dispatch(closeModal("menu"));
  }, [dispatch]);

  return (
    <section
      className="absolute right-0 max-w-md w-[250px] bg-white shadow-sm z-100 top-16 rounded-xl border"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col mt-4 [&>button]:text-left [&>button]:px-6 [&>button]:py-3 text-sx pb-2 border-b border-solid border-b-neutral-300">
        <Button className="font-bold hover:bg-neutral-100" onClick={openAuthModal}>
          Sign Up
        </Button>

        <Button className="hover:bg-neutral-100" onClick={openAuthModal}>
          Log in
        </Button>
      </div>
      <div className="flex flex-col mt-4 [&>button]:text-left [&>button]:px-6 [&>button]:py-3 text-sx mb-2">
        <Button className="hover:bg-neutral-100">Airbnb your home</Button>

        <Button className="hover:bg-neutral-100">Host an experience</Button>

        <Button className="hover:bg-neutral-100">Help</Button>
      </div>
    </section>
  );
};

export default MenuModal;

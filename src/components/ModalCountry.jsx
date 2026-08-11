"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import ModalCountryData from "./ModalCountryData";

export function CountryDataModal({isOpen, onClose, country}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Button variant="secondary" size="sm">
        View Details
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-120">
            <Modal.CloseTrigger />
            <ModalCountryData country={country} />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

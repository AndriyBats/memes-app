'use client'

import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalContent,
} from "@heroui/react";
// types
import { ModalProps } from '../types'
// forms
import MemeForm from "@/src/app/forms/meme-form";
//////////////////////////////////////////////////

export default function ModalComponent({ data, isOpen, onOpenChange, submitAction }: ModalProps) {
    return (
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Edit</ModalHeader>
                <ModalBody>
                  <MemeForm data={data} onOpenChange={onOpenChange} submitAction={submitAction} />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
    );
}

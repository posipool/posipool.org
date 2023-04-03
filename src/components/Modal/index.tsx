import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from '@chakra-ui/react'
import { ModalProps } from './types'

export default function Modal(props: ModalProps) {
  const { children, title, ...rest } = props
  return (
    <>
      <ChakraModal {...rest} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>{title}</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}

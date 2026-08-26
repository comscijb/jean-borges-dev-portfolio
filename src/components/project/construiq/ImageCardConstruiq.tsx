import { useEffect, useState } from "react";
import { Box, Image, IconButton, Portal } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

interface ProjectImageProps {
  imageSrc: string;
  alt?: string;
}

export function ProjectCardImage({
  imageSrc,
  alt = "Captura de tela do projeto",
}: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Box
        as="button"
        position="relative"
        alignSelf="center"
        w="100%"
        aspectRatio="16 / 9"
        minW="0"
        overflow="hidden"
        rounded="2xl"
        border="1px solid"
        borderColor="border.emphasized"
        bg="bg.cardStrong"
        cursor="zoom-in"
        transition="all 0.2s ease"
        _hover={{
          transform: "translateY(-2px)",
          borderColor: "brand.fg",
        }}
        onClick={() => setIsOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <Image
          src={imageSrc}
          alt={alt}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.25s ease"
          _hover={{
            transform: "scale(1.015)",
          }}
        />
      </Box>

      {isOpen && (
        <Portal>
            <Box
            position="fixed"
            inset="0"
            zIndex="9999"
            bg="rgba(0, 0, 0, 0.88)"
            backdropFilter="blur(8px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={{ base: "3", md: "8" }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            >
            <IconButton
                aria-label="Fechar imagem"
                position="fixed"
                top={{ base: "4", md: "6" }}
                right={{ base: "4", md: "6" }}
                zIndex="10000"
                onClick={() => setIsOpen(false)}
            >
                <FiX />
            </IconButton>

            <Image
                src={imageSrc}
                alt={alt}
                maxW={{ base: "calc(100vw - 24px)", md: "95vw" }}
                maxH={{ base: "calc(100dvh - 24px)", md: "90vh" }}
                w="auto"
                h="auto"
                objectFit="contain"
                rounded="xl"
                onClick={(event) => event.stopPropagation()}
            />
            </Box>
        </Portal>
        )}
    </>
  );
}

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

import LogoDesktop from "../../../assets/logoDesktop.svg";
import LogoMobile from "../../../assets/logoMobile.svg";

export const Header = () => {
  const token = true;

  const [tablet] = useMediaQuery("(min-width: 550px)");

  return (
    <Flex justifyContent="center" p="0 20px" bgColor="#ffffff">
      <Flex alignItems="center" gap="2" h="80px" w="1200px">
        <Box>
          <Heading>
            <Link as={ReachLink} to="/dashboard">
              <img src={tablet ? LogoDesktop : LogoMobile} alt="Logo" />
            </Link>
          </Heading>
        </Box>
        <Spacer />
        {token ? (
          <Flex alignItems="center" gap="16px">
            <Avatar
              w="45px"
              h="45px"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    fontSize="1rem"
                    fontWeight="500"
                  >
                    Leonardo 
                  </MenuButton>
                  <MenuList border="none">
                    <Flex flexDirection="column">
                      <Link
                        style={{ textDecoration: "none", padding: "5px 10px" }}
                        _hover={{
                          background: "#D3FFDB",
                        }}
                        as={ReachLink}
                        to="/register/room"
                      >
                        Disponibilizar quarto
                      </Link>
                      <Link
                        style={{ textDecoration: "none", padding: "5px 10px" }}
                        _hover={{
                          background: "#D3FFDB",
                        }}
                        as={ReachLink}
                        to="/favorites"
                      >
                        Favoritos
                      </Link>
                      <Link
                        style={{ textDecoration: "none", padding: "5px 10px" }}
                        _hover={{
                          background: "#D3FFDB",
                        }}
                        as={ReachLink}
                        to="/"
                      >
                        Sair
                      </Link>
                    </Flex>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
        ) : (
          <ButtonGroup gap="2" mt="15px">
            <Button
              color="#ffffff"
              bg="#40C057"
              border="none"
              p="12px 20px"
              borderRadius="10px"
              fontWeight="700"
              _hover={{
                background: "#D3FFDB",
              }}
            >
              Cadastrar-se
            </Button>
            <Button
              color="#ffffff "
              bg="#40C057"
              border="none"
              p="12px 20px"
              borderRadius="10px"
              fontWeight="700"
              _hover={{
                background: "#D3FFDB",
              }}
            >
              Login
            </Button>
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  );
};

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CardWidget } from "../CardWidget";
import { useCategory } from "../../hooks";
import { Link } from "react-router-dom";
import logo from '../../assets/LOGO.png';
import { Text } from "@chakra-ui/react";


export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { categories } = useCategory();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex alignItems={"center"}>
                        <Link to="/">

                            <Image src={logo}
                                alt="logo"
                                marginTop="2px"
                                objectFit="contain"
                                ml={0}
                                boxSize="100px"
                                borderRadius="full"

                                transition="all 0.3s ease"
                                filter="brightness(0.9)"
                                _hover={{ transform: "rotate(10deg)", filter: "brightness(1.2)" }}


                            />
                        </Link>
                        <Link to="/">
                        <Text
                            ml={0} 
                            fontSize="xl" 
                            fontWeight="bold"  
                            color={useColorModeValue("black")} 
                        >
                            AllMarket
                        </Text>
                        </Link>
                    </Flex>
                    <Menu>
                        <MenuButton as={Button} cursor="pointer" style={{ marginLeft: 30 }}>
                            Categorias
                        </MenuButton>
                        <MenuList height={"300px"} overflowY={"scroll"}>
                            {categories.map((category) => (
                                <MenuItem key={category.slug}>
                                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    <Flex alignItems={"center"}>
                        <CardWidget />
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={"https://avatars.dicebear.com/api/male/username.svg"}
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={"https://avatars.dicebear.com/api/male/username.svg"}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Burger,
  Avatar,
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
  UnstyledButton,
  Group,
  NavLink,
  Tabs,
} from "@mantine/core";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [navLink, setNavLink] = useState("ssm");

  if (!loggedIn) return <Login setLoginState={(val) => setLoggedIn(val)} />;
  return <Layout active={navLink} getNavLink={(val) => setNavLink(val)} />;
}

const Login = ({ setLoginState }) => {
  return (
    <div className="bg-[#f1f1f1] h-screen">
      <div className="w-full ">
        <img src="/logo.svg" alt="logo" srcset="" />
      </div>
      <div className="mt-12 mx-auto w-1/3 ">
        <div className="bg-white p-8 space-y-4 h-[300px]">
          <h1
            className="m-0 font-[Oswald] w-full text-center
          "
          >
            Admin <span className="text-red-700">Login</span>
          </h1>
          <TextInput placeholder="Username" className="bg-[#f1f1f1] m" />
          <PasswordInput placeholder="Password" />
          <p className="cursor-pointer w-full text-right text-[0.7rem] text-red-700">
            Forgot password
          </p>
          <Button
            style={{
              background: "rgb(185,28,28)",
              fontWeight: "lighter",
              borderRadius: 0,
              width: "50%",
            }}
            className="float-right uppercase bg-red-700 font-light w-1/2"
            onClick={() => setLoginState(true)}
          >
            sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

const Layout = ({ active, getNavLink }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
          <div className="mt-6">
            <NavLink
              label="Site Section Management"
              active={active == "ssm"}
              color="red"
              onClick={() => getNavLink("ssm")}
            />
            <NavLink
              label="User & Access Management"
              active={active == "uam"}
              color="red"
              onClick={() => getNavLink("uam")}
            />
            <NavLink
              label="Course Management"
              active={active == "cm"}
              color="red"
              onClick={() => getNavLink("cm")}
            />
          </div>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div className="flex h-full align-middle">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div className="flex justify-between w-full">
              <img src="/logo.svg" className="h-[64px] mt-[-12px]" alt="logo" />
              <UnstyledButton>
                <Group>
                  <Avatar size={40} color="red">
                    PN
                  </Avatar>
                  <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                    <div>
                      <Text>Peter Njihia</Text>
                      <Text size="xs" color="dimmed">
                        Manager
                      </Text>
                    </div>
                  </MediaQuery>
                </Group>
              </UnstyledButton>
            </div>
          </div>
        </Header>
      }
    >
      {active == "ssm" && <SSM />}
      {active == "uam" && <UAM />}
      {active == "cm" && <CM />}
    </AppShell>
  );
};

// Site sections management
const SSM = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="home" color="red">
        <Tabs.List>
          <Tabs.Tab value="home">
            {" "}
            <p className="text-[0.8rem]">Home</p>
          </Tabs.Tab>
          <Tabs.Tab value="services">
            <p className="text-[0.8rem]">Services</p>
          </Tabs.Tab>
          <Tabs.Tab value="products">
            {" "}
            <p className="text-[0.8rem]">Products</p>
          </Tabs.Tab>
          <Tabs.Tab value="training">
            {" "}
            <p className="text-[0.8rem]">Training</p>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="home" pt="xs" className=" mt-6">
          <div className="h-[calc(100vh-210px)] overflow-x-auto">
            {/* Header section */}
            <h1 className="text-red-700 uppercase text-[0.7rem]">
              Header section
            </h1>
            <div className="flex mt-4 w-full">
              <div className="w-1/3 space-y-3">
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="ex. Safety next"
                />
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="ex. Fire equipment & services"
                />
                <textarea
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="Short description here"
                />
                <input type="file" className="text-[0.8rem]" />
              </div>
              <div className="w-2/3"></div>
            </div>

            {/* What we do section */}
            <h1 className="text-red-700 uppercase text-[0.7rem] mt-12">
              What we do section
            </h1>
            <div className="flex mt-4 w-full">
              <div className="w-1/3 space-y-3">
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="ex. Fire safety training"
                />
                <textarea
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="Short description here"
                />
                <input type="file" className="text-[0.8rem]" />
              </div>
              <div className="w-2/3"></div>
            </div>

            {/* Our story section */}
            <h1 className="text-red-700 uppercase text-[0.7rem] mt-12">
              Our story
            </h1>
            <div className="flex mt-4 w-full">
              <div className="w-1/3 space-y-3">
                <textarea
                  type="text"
                  rows={20}
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="ex. We began ..."
                />
              </div>
              <div className="w-2/3"></div>
            </div>

            {/* Location & Contacts */}
            <h1 className="text-red-700 uppercase text-[0.7rem] mt-12">
              Location, Contacts & Socials
            </h1>
            <div className="flex mt-4 w-full">
              <div className="w-1/3 space-y-3">
                <textarea
                  type="text"
                  rows={3}
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="ex. Ruiru ..."
                />
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="ex. 0712345678"
                />
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="Twitter link"
                />
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="Facebook link"
                />
                <input
                  type="text"
                  className="bg-white px-3 py-2 text-[0.8rem] w-full"
                  placeholder="LinkedIn link"
                />
              </div>
              <div className="w-2/3"></div>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="services" pt="xs">
          Services
        </Tabs.Panel>

        <Tabs.Panel value="products" pt="xs">
          Products
        </Tabs.Panel>

        <Tabs.Panel value="training" pt="xs">
          Training
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

// User & Access management
const UAM = () => {
  return <div>User & Access Management</div>;
};

// course management
const CM = () => {
  return <div>Course Management</div>;
};

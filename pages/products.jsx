import {
  Anchor,
  Badge,
  Breadcrumbs,
  Card,
  Divider,
  Group,
  Input,
  Menu,
  NavLink,
} from "@mantine/core";
import { IconSearch, IconStar } from "@tabler/icons";
import { Footer, Header } from "../components";

const items = [
  { title: "Products", href: "#" },
  { title: "Fire alarm systems", href: "#" },
  { title: "Addressable fire alarm systems", href: "#" },
].map((item, index) => (
  <span className="text-[0.9rem] font-light text-gray-500 cursor-pointer">
    {item.title}
  </span>
));

export default function Products() {
  return (
    <div>
      <Header active="products" />

      {/* Content */}
      <div className="w-full">
        <p className="w-full  text-center tracking-wide uppercase text-[1.2rem] text-black font-extrabold  ">
          Products
        </p>
        <div className="w-[70px] h-[4px] bg-[#d32131]  mx-auto" />
      </div>

      <div className="w-full mt-8 flex max-h-[100vh] overflow-y-auto">
        <div className="space-y-2 w-[20%]">
          {[1, 2, 3, 4].map((el) => (
            <Category
              key={el}
              label="Fire alarm system"
              count={6}
              items={[1, 2, 3, 4, 5, 6]}
            />
          ))}
          <NavLink label="Sprinkler systems" childrenOffset={28}>
            <div className="space-y-2">
              <Category
                label="Fire alarm system"
                count={6}
                items={[1, 2, 3, 4, 5, 6]}
              />
              <Category
                label="Fire alarm system"
                count={6}
                items={[1, 2, 3, 4, 5, 6]}
              />
            </div>
          </NavLink>
        </div>
        <Divider orientation="vertical" />
        <div className="w-[80%] space-y-12">
          <div className="flex justify-between px-4">
            <Breadcrumbs>{items}</Breadcrumbs>
            <Input icon={<IconSearch size={16} />} placeholder="Search" />
          </div>
          <div className="grid grid-cols-5 px-4 max-h-[80vh] overflow-y-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
              <Product key={el} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Category = ({ label, count, items }) => {
  return (
    <div>
      <Menu trigger="hover" openDelay={100} closeDelay={400} position="right">
        <Menu.Target>
          <NavLink label={`${label} (${count})`} />
        </Menu.Target>
        <Menu.Dropdown
          style={{ width: 200, background: "#f1f1f1", marginTop: 48 }}
        >
          <Menu.Label>Products</Menu.Label>
          <div className="grid grid-cols-3 mt-4 ml-6 ">
            {items.map((item, i) => {
              return (
                <div key={i} className="col-span-1 mr-6 mb-6 relative">
                  <Badge
                    color="teal"
                    radius={0}
                    className="absolute left-0 top-0 z-10"
                  >
                    OFFER!
                  </Badge>
                  <Badge
                    color="red"
                    radius={0}
                    className="absolute right-0 top-0 float-right z-10"
                  >
                    -50%
                  </Badge>
                  <Card
                    shadow="sm"
                    p="lg"
                    radius="md"
                    withBorder
                    style={{ width: 150 }}
                  >
                    <Card.Section>
                      <img
                        src="/product-2.webp"
                        alt=""
                        className="w-[150px] object-cover"
                      />
                    </Card.Section>
                    <Group position="apart" mt="md" mb="xs">
                      <a
                        href={`/#`}
                        className="text-[0.9rem] font-light text-gray-600"
                      >
                        Item name
                      </a>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((el) => (
                          <IconStar
                            key={el}
                            fill="#FFD700"
                            stroke={0}
                            size={12}
                            className="inline"
                          />
                        ))}
                      </div>
                    </Group>
                  </Card>
                </div>
              );
            })}
          </div>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

const Product = () => {
  return (
    <div className="col-span-1 mr-6 mb-6 relative">
      <Badge color="teal" radius={0} className="absolute left-0 top-0 z-10">
        OFFER!
      </Badge>
      <Badge
        color="red"
        radius={0}
        className="absolute right-0 top-0 float-right z-10"
      >
        -50%
      </Badge>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <img src="/product-2.webp" alt="" className="w-full object-cover" />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Badge color="teal" radius={0} variant="outline" size="sm">
            CATEGORY
          </Badge>
          <a
            href={`/#`}
            className="text-[0.9rem] hover:underline font-light text-gray-600"
          >
            Item name
          </a>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((el) => (
              <IconStar
                key={el}
                fill="#FFD700"
                stroke={0}
                size={12}
                className="inline"
              />
            ))}
          </div>
        </Group>
      </Card>
    </div>
  );
};

import { FOOTER_PAGES } from "@/utils/app/consts";
import { Flex, Text } from "@mantine/core";
import Link from "next/link";

const Footer = () => {
    return (
        <Flex
            justify={'space-between'}
            mt={90}
            h={44}
            align={'center'}
            pl={20}
            pr={20}
        >
            <Text color="black" className="opacity-50">
                Copyright © 2025 Pharmacy Wiki. All rights reserved.
            </Text>
            <Flex
                gap={40}
            >
                {
                    FOOTER_PAGES.map((item) =>
                        <Link href={item.path}>
                            <Text color="black" className="opacity-50">
                                { item.name }
                            </Text>
                        </Link>
                    )
                }
            </Flex>
        </Flex>
    )
}

export default Footer;
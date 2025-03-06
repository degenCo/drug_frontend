import { Box, Flex, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";

const Manufacturers = () => {
    const data = [
        "Pharmedica Laboratories",
        "Pfizer",
        "Novartis",
        "Johnson & Johnson",
        "Merck & Co.",
        "Roche",
        "Sanofi",
        "AstraZeneca",
        "Eli Lilly and Company",
        "AbbVie"
    ]
    return (
        <Box>
            <Flex
                justify='space-between'
                align='center'
            >
                <Box>
                    <Text size={31} weight='bold'>
                        Manufacturers
                    </Text>
                    <Text mt={5} className="opacity-50" size={17}>
                        Pharmaceutical companies, manufacturers and suppliers
                    </Text>
                </Box>
                <Text color="#6B9FFF" className="cursor-pointer">
                    See All
                </Text>
            </Flex>
            <Box className="mt-[50px]">
                <SimpleGrid
                    spacing={20}
                    cols={10}
                    breakpoints={[
                        { maxWidth: 'md', cols: 10, spacing: 'md' },
                        { maxWidth: 'sm', cols: 4, spacing: 'sm' },
                        { maxWidth: 'xs', cols: 2, spacing: 'sm' },
                    ]}
                >
                    {
                        data.map((item) =>
                            <Flex
                                bg='white'
                                p={10}
                                gap={15}
                                direction='column'
                                justify='center'
                                align='center'
                            >
                                <Image src='/images/empty_image.svg' alt="" width={64} height={64} />
                                <Flex
                                    h={30}
                                    justify='center'
                                    align='center'
                                >
                                    <Text size={15} >
                                        {item}
                                    </Text>
                                </Flex>
                            </Flex>
                        )
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Manufacturers;
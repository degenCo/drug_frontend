import { BRAND_NAMES } from "@/utils/app/consts";
import { Box, Flex, SimpleGrid, Text } from "@mantine/core";

const BrandNames = () => {
    return (
        <Box mt={90} p={10}>
            <Box>
                <Text size={31} weight='bold'>
                    Pharmaceutical Drug & Brand Names
                </Text>
                <Text mt={5} className="opacity-50" size={17}>
                    World famous pharmaceutical drug and brand names
                </Text>
            </Box>
            <Box mt={50}>
                <SimpleGrid cols={5}
                    breakpoints={[
                        { maxWidth: '62rem', cols: 5, spacing: 'md' },
                        { maxWidth: '48rem', cols: 1, spacing: 'sm' },
                      ]}
                >
                    {
                        BRAND_NAMES.map((item, index) => 
                            <Flex
                                gap={15}
                                mt={35}
                            >
                                <Text size={30} weight={100}>
                                    { index + 1 }
                                </Text>
                                <Box>
                                    <Text size={17} weight='bold' >{ item.title }</Text>
                                    <Text className="opacity-50" size={14}>{ item.content }</Text>
                                </Box>
                            </Flex>
                        )
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default BrandNames;
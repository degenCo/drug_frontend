import { POPULAR_SEARCHES } from "@/utils/app/consts";
import { Box, Flex, Text } from "@mantine/core";

const PopularSearches = () => {
    return (
        <Flex mt={30} justify='center' gap={10} align='center'>
            <Text size={17} className="color-black opacity-50">Popular searches: </Text>
            <Flex gap={16}>
                {
                    POPULAR_SEARCHES.map((item: string) => 
                        <Text size={14} weight={500} className="opacity-90 cursor-pointer"
                            onClick={() => {
                                window.location.href="/search?query="+item
                            }}
                        >{ item }</Text>
                    )
                }
            </Flex>
        </Flex>
    )
}

export default PopularSearches;
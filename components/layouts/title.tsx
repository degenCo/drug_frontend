import { Box, Flex, Text } from "@mantine/core";
import { FC } from "react";

interface Props {
    title: string;
    summary: string,
    gradient_title: string
}

const Title: FC<Props> = ({
    title,
    summary,
    gradient_title
}) => {
    return (
        <Box>
            <Box>
                <Flex align='center' gap={10}>
                    <Text color="black" weight='bold' size='31px'>{title}</Text>
                    <Text color="transparent" weight='bold' size='31px' className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">{gradient_title}</Text>
                </Flex>
                <Text color="black" className="opacity-50">
                    {summary}
                </Text>
            </Box>
            
        </Box>
    )
}

export default Title;
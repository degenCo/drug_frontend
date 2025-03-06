import { Box, Flex, Grid, List, Text } from "@mantine/core";
import { FC } from "react";

interface Props {
    data: any
}

const Detail: FC<Props> = ({
    data
}) => {
    return (
        <Box mt={30}>
            <Text size={31}>{data.name}</Text>
            <Text mt={20} size={17}>
                Pharmaceutical active ingredients:
            </Text>
            <List listStyleType="disc">
                {
                    data.information.ingredients.map((item: string) =>
                        <List.Item>
                            <Text color="#6B9FFF" size={17}>{item}</Text>
                        </List.Item>
                    )
                }
            </List>
            <Text mt={20} size={17}>
                Available forms, composition and doses of Penicillin:

            </Text>
            <List listStyleType="disc">
                {
                    data.information.available_forms.map((item: string) =>
                        <List.Item>
                            <Text className="opacity-50" size={17}>{item}</Text>
                        </List.Item>
                    )
                }
            </List>
            <Text mt={20} size={17}>
                Medical categories:
            </Text>
            <List listStyleType="disc">
                {
                    data.information.medical_categories.map((item: string) =>
                        <List.Item>
                            <Text className="opacity-50" size={17}>{item}</Text>
                        </List.Item>
                    )
                }
            </List>
            <Text mt={20} size={17}>
                Indications and usages, anatomical therapeutic chemical and diseases classification codes:
            </Text>
            <List listStyleType="disc">
                {
                    data.information.indications.map((item: any) =>
                        <List.Item>
                            <Flex>
                                <Text size={17} color="#6B9FFF">{item.value}</Text>
                                <Text className="opacity-50" size={17}>{item.content}</Text>
                            </Flex>
                        </List.Item>
                    )
                }
            </List>
            <Text mt={20} size={17}>
                Pharmaceutical companies: manufacturers, researchers, developers, local distributors and suppliers:
            </Text>
            <List listStyleType="disc">
                {
                    data.information.pharmaceutical_companies.map((item: any) =>
                        <List.Item>
                            <Text size={17} color="#6B9FFF">{item}</Text>
                        </List.Item>
                    )
                }
            </List>
        </Box>
    )
}

export default Detail;
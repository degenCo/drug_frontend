import { getData } from "@/api/ingredients";
import Detail from "@/components/ingredients/detail";
import Title from "@/components/layouts/title";
import Pagination from "@/components/utils/pagination";
import SearchInput from "@/components/utils/search_input";
import { Box, Flex, Grid, LoadingOverlay, Table, Text } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const Ingredents = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perPage, setPerpage] = useState<number>(70);
    const [pageCount, setPageCount] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getData({ page_index: pageIndex, per_page: perPage });
            setData(res.data);
            setTotalPageCount(Math.floor(res.total_count / perPage));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [perPage, pageIndex])

    useEffect(() => {

    }, [showDetail])

    return (
        <Box>
            <SearchInput />

            {
                showDetail ?
                    <Detail data={detail} /> :
                    <Box>
                        <Title
                            title="All Pharmaceutical Ingredients"
                            gradient_title="Ingredients"
                            summary="Active pharmaceutical ingredients online database"
                        />
                        <Flex
                            justify='flex-end'
                            align='center'
                            pb={13}
                            className="border-b border-grey-dark"
                        >
                            <Pagination
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                totalPageCount={totalPageCount}
                                perPage={perPage}
                            />
                        </Flex>
                        <Box mt={30}>
                            <Grid>
                                {
                                    data.map((item: any) =>
                                        <Grid.Col sm={6} md={6}>
                                            <Flex gap={10} align='center' className="cursor-pointer"
                                                onClick={() => {
                                                    setDetail(item);
                                                    setShowDetail(true);
                                                }}
                                            >
                                                <IconCircleFilled size={10} />
                                                <Text className="opacity-50">
                                                    {item.name}
                                                </Text>
                                            </Flex>
                                        </Grid.Col>
                                    )
                                }
                            </Grid>
                        </Box>
                        <Pagination
                            pageIndex={pageIndex}
                            setPageIndex={setPageIndex}
                            totalPageCount={totalPageCount}
                            perPage={perPage}
                        />
                    </Box>
            }

            <LoadingOverlay visible={isLoading} />
        </Box>
    )
}

export default Ingredents;
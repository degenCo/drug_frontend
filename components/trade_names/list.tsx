import { getData } from "@/api/trade_names";
import { Box, Flex, LoadingOverlay, Table, Text } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import Pagination from "../utils/pagination";

interface Props {
    setDetail: (detail: any) => void
}
const List:FC<Props> = ({
    setDetail
}) => {

    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perPage, setPerpage] = useState<number>(50);
    const [pageCount, setPageCount] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1)

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
    return (
        <Box className="min-h-full">
            <Box>
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
                <Flex mt={20} gap={20} direction='column'>
                    <Table>
                        <tbody>
                            {
                                data.map((item: any, index: number) =>
                                    <tr style={{ background: index % 2 == 1 ? 'transparent' : 'rgb(121, 145, 190, 0.1)' }} className="cursor-pointer"
                                        onClick={() => {
                                            setDetail(item);
                                        }}
                                    >
                                        <td width={200}>
                                            <Text size={17}>{item.name}</Text>
                                        </td>
                                        <td>
                                            <Text size={17} className="opacity-50">{item.information.ingredients.join(";")}</Text>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Flex>
                <Pagination
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    totalPageCount={totalPageCount}
                    perPage={perPage}
                />
            </Box>
            <LoadingOverlay visible={isLoading} />
        </Box>
    )
}

export default List;
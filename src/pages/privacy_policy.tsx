import Title from "@/components/layouts/title";
import PrivacyList from "@/components/privacy_policy/privacy_list";
import SearchInput from "@/components/utils/search_input";
import { Box, Divider, Text } from "@mantine/core";

const PrivacyPolicy = () => {
    return (
        <Box>
            <SearchInput />
            <Title 
                title="Privacy Policy for Pharmacy"
                update_date="2/25/2025"
            />
            <Box mt={30}>
                <PrivacyList />
            </Box>
        </Box>
    )
}

export default PrivacyPolicy;
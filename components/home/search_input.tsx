import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    return (
        <Input 
            w='100%'
            radius={100}
            size="xl"
            placeholder="Search medicine by brand name, generic name, ingredient or manufacturer"
            rightSection={
                <IconSearch size="1.5rem" className="opacity-50" />
            }
            value={value}
            onChange={(e: any) => {
                setValue(e.currentTarget.value);
            }}
            onKeyDown={(e: KeyboardEvent) => {
                if(e.key === "Enter") {
                    e.preventDefault();
                    router.push("/search?query="+value)
                }
            }}
        />
    )
}

export default SearchInput;
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
export type TypingProps = {
    typing: TypingStringProps;
    setString: Dispatch<
        SetStateAction<{ answer: string; caption: string; typed: string }>
    >;
};
export type TypingStringProps = {
    typed: string;
    answer: string;
    caption: string;
};

export default function Typing({ typing }: TypingProps) {
    return (
        <Stack alignItems="center">
            <Typography>{typing.caption}</Typography>
            <Stack spacing={0} direction="row">
                <Typography color="GrayText">{typing.typed}</Typography>
                <Typography>{typing.answer}</Typography>
            </Stack>
        </Stack>
    );
}

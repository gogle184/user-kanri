import { type FC, memo } from "react";
import { Stack, Input } from "@chakra-ui/react";
import { DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogCloseTrigger } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";


export const UserDetailModal: FC = memo(() => {
  return(
    <DialogContent>
    <DialogHeader>
      <DialogTitle>ユーザー詳細</DialogTitle>
    </DialogHeader>
    <DialogBody mx={4}>
      <Stack gap={4}>
        <Field label="名前">
          <Input placeholder="名前" disabled/>
        </Field>
        <Field label="フルネーム">
          <Input placeholder="フルネーム" disabled/>
        </Field>
        <Field label="Mail">
          <Input placeholder="Mail" disabled/>
        </Field>
        <Field label="TEL">
          <Input placeholder="TEL" disabled/>
        </Field>
      </Stack>
    </DialogBody>
    <DialogFooter>
      <DialogCloseTrigger>閉じる</DialogCloseTrigger>
    </DialogFooter>
  </DialogContent>
  );
});

import { type FC, memo } from "react";
import { Stack, Input } from "@chakra-ui/react";
import { DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogCloseTrigger } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";

import type { User } from "@/types/api/user";

type Props = {
  user: User | null;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user } = props;
  return(
    <DialogContent>
    <DialogHeader>
      <DialogTitle>ユーザー詳細</DialogTitle>
    </DialogHeader>
    <DialogBody mx={4}>
      <Stack gap={4}>
        <Field label="名前">
          <Input placeholder={user?.username} disabled/>
        </Field>
        <Field label="フルネーム">
          <Input placeholder={user?.name} disabled/>
        </Field>
        <Field label="Mail">
          <Input placeholder={user?.email} disabled/>
        </Field>
        <Field label="TEL">
          <Input placeholder={user?.phone} disabled/>
        </Field>
      </Stack>
    </DialogBody>
    <DialogFooter>
      <DialogCloseTrigger>閉じる</DialogCloseTrigger>
    </DialogFooter>
  </DialogContent>
  );
});

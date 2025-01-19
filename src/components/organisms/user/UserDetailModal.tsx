import { type FC, memo, useState, useEffect, type ChangeEvent } from "react";
import { Stack, Input } from "@chakra-ui/react";
import { DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionTrigger, DialogCloseTrigger } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/api/user";

type Props = {
  user: User | null;
  isAdmin?: boolean;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isAdmin=false } = props;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username || "");
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
  }, [user]);

  const onClickUpdate = () => {
    alert("更新しました");
  };

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return(
    <DialogContent>
    <DialogHeader>
      <DialogTitle>ユーザー詳細</DialogTitle>
    </DialogHeader>
    <DialogBody mx={4}>
      <Stack gap={4}>
        <Field label="名前">
          <Input placeholder={username} onChange={onChangeUsername} disabled={!isAdmin}/>
        </Field>
        <Field label="フルネーム">
          <Input placeholder={name} onChange={onChangeName} disabled={!isAdmin}/>
        </Field>
        <Field label="Mail">
          <Input placeholder={email} onChange={onChangeEmail} disabled={!isAdmin}/>
        </Field>
        <Field label="TEL">
          <Input placeholder={phone} onChange={onChangePhone} disabled={!isAdmin}/>
        </Field>
      </Stack>
    </DialogBody>
    <DialogFooter>
      <DialogCloseTrigger>閉じる</DialogCloseTrigger>
      {isAdmin && (
        <>
          <DialogActionTrigger asChild>
            <Button variant="outline">キャンセル</Button>
          </DialogActionTrigger>
          <DialogActionTrigger>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </DialogActionTrigger>
        </>
      )}
    </DialogFooter>
  </DialogContent>
  );
});

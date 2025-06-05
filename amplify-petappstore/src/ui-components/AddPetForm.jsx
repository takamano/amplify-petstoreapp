/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "./utils";
import { schema } from "../models/schema";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function AddPetForm(props) {
  const { PetProps, overrides, ...rest } = props;
  const [nameFieldValue, setNameFieldValue] = useStateMutationAction("");
  const [ageFieldValue, setAgeFieldValue] = useStateMutationAction("");
  const [breedFieldValue, setBreedFieldValue] = useStateMutationAction("");
  const [aboutFieldValue, setAboutFieldValue] = useStateMutationAction("");
  const [imageValue, setImageValue] = useStateMutationAction("");
  const [colorFieldValue, setColorFieldValue] = useStateMutationAction("");
  const saveButtonOnClick = useDataStoreCreateAction({
    fields: {
      name: nameFieldValue,
      age: ageFieldValue,
      breed: breedFieldValue,
      about: aboutFieldValue,
      image: imageValue,
      color: colorFieldValue,
    },
    model: Pet,
    schema: schema,
  });
  const updateButtonOnClick = useDataStoreUpdateAction({
    fields: {
      name: nameFieldValue,
      age: ageFieldValue,
      breed: breedFieldValue,
      about: aboutFieldValue,
      image: imageValue,
      color: colorFieldValue,
    },
    id: PetProps?.id,
    model: Pet,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddPetForm")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <View
          width="unset"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 60px - -20px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ペットを追加"
            {...getOverrideProps(
              overrides,
              "\u30DA\u30C3\u30C8\u3092\u8FFD\u52A0"
            )}
          ></Text>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="398px"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </View>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            placeholder="ポチ"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={nameFieldValue}
            onChange={(event) => {
              setNameFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "NameField")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="年齢"
            placeholder="3歳"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={ageFieldValue}
            onChange={(event) => {
              setAgeFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "AgeField")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="犬種"
            placeholder="ラボラドール"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={breedFieldValue}
            onChange={(event) => {
              setBreedFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "BreedField")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="説明"
            placeholder="説明を記入します。"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={aboutFieldValue}
            onChange={(event) => {
              setAboutFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "AboutField")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="色"
            placeholder="犬の色を記入します。"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={colorFieldValue}
            onChange={(event) => {
              setColorFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "ColorField")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="画像ファイル"
            placeholder="画像のURLを記入します。"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={imageValue}
            onChange={(event) => {
              setImageValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "Image")}
          ></TextField>
        </Flex>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="保存"
            onClick={() => {
              saveButtonOnClick();
            }}
            {...getOverrideProps(overrides, "SaveButton")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="更新"
            onClick={() => {
              updateButtonOnClick();
            }}
            {...getOverrideProps(overrides, "UpdateButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

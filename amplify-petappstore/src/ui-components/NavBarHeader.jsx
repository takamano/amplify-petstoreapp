/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth, useAuthSignOutAction } from "./utils";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const signOutButtonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(185,242,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="797px"
        height="71px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Pet"
          {...getOverrideProps(overrides, "AddPet")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign Out"
        onClick={() => {
          signOutButtonOnClick();
        }}
        {...getOverrideProps(overrides, "SignOutButton")}
      ></Button>
      <View
        width="113px"
        height="122px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 443")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="60px"
          height="41px"
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          top="0px"
          left="26.5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32129767081")}
        >
          <Image
            width="45px"
            height="45px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={authAttributes["profile"]}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="113px"
          height="41px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="81px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={authAttributes["given_name"]}
          {...getOverrideProps(overrides, "UserNameDisplay")}
        ></Text>
      </View>
    </Flex>
  );
}

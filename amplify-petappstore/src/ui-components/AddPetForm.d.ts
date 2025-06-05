/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPetFormOverridesProps = {
    AddPetForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<ViewProps>;
    "\u30DA\u30C3\u30C8\u3092\u8FFD\u52A0"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    NameField?: PrimitiveOverrideProps<TextFieldProps>;
    AgeField?: PrimitiveOverrideProps<TextFieldProps>;
    BreedField?: PrimitiveOverrideProps<TextFieldProps>;
    AboutField?: PrimitiveOverrideProps<TextFieldProps>;
    ColorField?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
    UpdateButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPetFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    PetProps?: Pet;
} & {
    overrides?: AddPetFormOverridesProps | undefined | null;
}>;
export default function AddPetForm(props: AddPetFormProps): React.ReactElement;

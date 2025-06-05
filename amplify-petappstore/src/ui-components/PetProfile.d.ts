/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PetProfileOverridesProps = {
    PetProfile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    Button4858415?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Dog Name"?: PrimitiveOverrideProps<TextProps>;
    Breed?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Age?: PrimitiveOverrideProps<TextProps>;
    Color?: PrimitiveOverrideProps<TextProps>;
    Button4856438?: PrimitiveOverrideProps<ButtonProps>;
    Button4856423?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PetProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
    Colors?: String;
    PetColor?: String;
    Color?: String;
    mark?: String;
} & {
    overrides?: PetProfileOverridesProps | undefined | null;
}>;
export default function PetProfile(props: PetProfileProps): React.ReactElement;

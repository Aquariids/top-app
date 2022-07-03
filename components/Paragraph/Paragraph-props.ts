import {DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HtmlHTMLAttributes <HTMLParagraphElement>,HTMLParagraphElement> {
    textSize?: 's' | 'm' | 'l',
    children: ReactNode
}
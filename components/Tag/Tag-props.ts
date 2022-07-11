import {DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes <HTMLDivElement>,HTMLDivElement> {
    textSize?: 's' | 'm',
    children: ReactNode,
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary',
    href?: string 
}
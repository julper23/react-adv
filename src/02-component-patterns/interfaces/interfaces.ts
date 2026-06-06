import { ReactElement } from "react"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement []
}

export interface Product {
    id: string,
    title: string,
    img?: string,
}

export interface ProductContextProps {
    product: Product,
    counter: number,
    increaseBy: ( value : number ) => void
} 

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : React.JSX.Element,
    Image: ({ img }: {img?: string;}) => React.JSX.Element;
    Title: ({ title }: { title?: string}) => React.JSX.Element;
    Buttons: () => React.JSX.Element;
}
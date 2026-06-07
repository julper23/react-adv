import styles from "../styles/styles.module.css"
import { createContext, ReactElement, useEffect } from "react"
import { useProduct } from "../hooks/useProduct"
import { ProductContextProps, Product, onChangeArgs } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement [],
    className?: string,
    style?: React.CSSProperties,
    onChange?: ( args:onChangeArgs ) => void,
    value?: number
}

export const ProductCard = ({ product, children, className, style, value, onChange }: Props) => {
    const {counter,increaseBy} = useProduct({ onChange, product, value })
    
    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}


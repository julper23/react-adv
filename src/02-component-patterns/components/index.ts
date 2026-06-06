import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
export { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
export { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
export { ProductButtons } from "./ProductButtons";

export const ProductCard:ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
})

export default ProductCard

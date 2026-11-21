import cn from "../../utils/cn";

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const Image = (props: IImageProps) => {
    const { src, alt, className = "", ...restProps } = props;

    return <img className={cn(className)} src={src} alt={alt} {...restProps} />;
};

export default Image;

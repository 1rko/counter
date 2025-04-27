type PanelProps={
    children?: React.ReactNode
    className?: string
}

export const Panel = (props: PanelProps) => {
    const {children, className} = props
    return (
        <div className={className}>
            {children}
        </div>
    );
};

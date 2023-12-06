export default function Paragraph({ children, modal, ...props }) {
    return <>
        {modal ? (
            <p className="text-stone-600 mb-4" {...props}>{children}</p>
        ) : (
            <p className="text-stone-400 mb-4" {...props}>{children}</p>
        )}
    </>;
}
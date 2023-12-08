export default function Heading({ children, modal }) {
    return (
        <>
            {modal ? (
                <h2 className="text-xl font-bold text-stone-700 my-4">{children}</h2>
            ) : (
                <h2 className="text-xl font-bold text-stone-500 my-4">{children}</h2>
            )}
        </>
    );
}
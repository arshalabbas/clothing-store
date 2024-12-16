const MarkUpText = ({ children }: { children: string }) => {
  const splitText = children.split("=");

  return (
    <>
      {splitText.map((part) => {
        if (part.startsWith("_") && part.endsWith("_")) {
          return <span className="underline">{part.slice(1, -1)}</span>;
        }

        if (part.startsWith("~") && part.endsWith("~")) {
          return <span className="line-through">{part.slice(1, -1)}</span>;
        }

        if (part.startsWith("*") && part.endsWith("*")) {
          return <span className="font-semibold">{part.slice(1, -1)}</span>;
        }

        return part;
      })}
    </>
  );
};

export default MarkUpText;

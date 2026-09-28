import type { MDXComponents } from "mdx/types";

function YouTube({ src, title = "YouTube video" }: { src: string; title?: string }) {
  return (
    <span className="not-prose my-6 block aspect-video w-full overflow-hidden rounded-lg border border-border">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </span>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    YouTube,
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    img: (props) => <img loading="lazy" decoding="async" {...props} />,
    ...components,
  };
}

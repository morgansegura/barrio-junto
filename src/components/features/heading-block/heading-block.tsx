import { cn } from "@/lib/utils/cn";

import { Heading } from "@/components/ui/heading/heading";

import "./heading-block.css";

import type { THeadingProps } from "@/components/ui/heading/heading";

type THeadingBlock = {
  heading: {
    as: THeadingProps["as"];
    children: THeadingProps["children"];
  };
  description?: string[];
  className?: string;
};

export function HeadingBlock({
  className,
  description,
  heading,
}: THeadingBlock) {
  return (
    <div className={cn("heading-block", className)}>
      <div className="heading-block-inner">
        <Heading as={heading.as} className="heading-block-title">
          {heading.children}
        </Heading>

        {description && (
          <p className="heading-block-description">
            {description.map((text: string, index: number) => (
              <span key={index}>{text}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

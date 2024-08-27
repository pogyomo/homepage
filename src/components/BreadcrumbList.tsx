"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

const BreadcrumbList: React.FC = ({}) => {
  const segments = useSelectedLayoutSegments();

  return (
    <div className="mb-4">
      <nav aria-label="breadcrumb-list" className="flex flex-row">
        <ul className="flex divide-x justify-center">
          <li className="px-4">
            {segments.length === 0 ? (
              <span className="font-bold">toppage</span>
            ) : (
              <Link href="/" className="hover:underline">
                toppage
              </Link>
            )}
          </li>
          {segments.map((path, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            return (
              <li key={href} className="px-4">
                {index === segments.length - 1 ? (
                  <span className="font-bold">{path}</span>
                ) : (
                  <Link href={href} className="hover:underline">
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BreadcrumbList;

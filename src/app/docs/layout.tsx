import { source } from "@/lib/source";

import { DocsLayout } from "@/components/layout/docs";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return <DocsLayout tree={source.pageTree}>{children}</DocsLayout>;
}

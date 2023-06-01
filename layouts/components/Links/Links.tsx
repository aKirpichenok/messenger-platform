import Link from "next/link";

type LinksProps = {
  path: string;
  children: React.ReactNode
}

export const Links = ({path, children}: LinksProps) => {
  return (
    <Link href={`/${path}`} legacyBehavior>
      {children}
    </Link>
  )
}
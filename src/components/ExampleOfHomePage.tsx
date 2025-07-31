import { PRIVATE_PAGES } from "@/config/private-pages";
import { PUBLIC_PAGES } from "@/config/public-pages.config";
import Link from "next/link";

export function ExampleOfHomePage() {
  return (
    <div>
      <h1>HOME</h1>

      <nav>
        <ul>
          <li>
            <Link href={PUBLIC_PAGES.LOGIN}>login page</Link>
          </li>
          <li>
            <Link href={PRIVATE_PAGES.PROFILE}>profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

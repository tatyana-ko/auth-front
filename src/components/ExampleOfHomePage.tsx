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
        </ul>
      </nav>
    </div>
  )
}

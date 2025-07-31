import Link from 'next/link';

export default function MainHeader() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Main Page</Link>
        </li>
        <Link href="/news">News</Link>
        <li></li>
      </ul>
    </>
  );
}

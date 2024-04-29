import Link from 'next/link';

import { Button } from '@/components/shared/ui/button';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}

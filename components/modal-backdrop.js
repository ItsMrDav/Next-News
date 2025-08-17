'use client';

import { useRouter } from 'next/navigation';

export default function ModalBackdrop() {
  const router = useRouter();

  // In case a problem caused should change router.back to {() => router.back()}
  return <div className="modal-backdrop" onClick={router.back} />;
}

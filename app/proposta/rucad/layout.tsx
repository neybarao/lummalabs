import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta · Rucad Engenharia",
  robots: { index: false, follow: false },
};

export default function RucadProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

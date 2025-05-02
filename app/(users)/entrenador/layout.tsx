import ContextWrapper from "@/components/Context-provider";
import Navbar from "@/components/navbar/Navbar";
import ToastError from "@/components/ToastError-provider";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <ToastError
        message="Por favor inicia sesión para continuar."
        route="/auth/login"
      />
    );
  }

  if (session.user.role !== "user") {
    return redirect("/enfermera/citas");
  }

  return (
    <>
      <Navbar user={session.user} />
      <ContextWrapper value={session.user.id}>{children}</ContextWrapper>
    </>
  );
}

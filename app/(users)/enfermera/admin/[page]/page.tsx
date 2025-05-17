import TableContents from "@/components/admin/TableContents";
import LoadingBackdrop from "@/components/LoadingBackdrop";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Suspense } from "react";

interface params {
  params: Promise<{ page: string }>;
}

const page = async ({ params }: params) => {
  const { page } = await params;

  return (
    <main className="mt-16 px-16">
      <h1 className="text-3xl mb-4 pt-8 font-semibold">Usuarios</h1>
      <Suspense
        fallback={
          <LoadingBackdrop
            text="Cargando usuarios..."
            styles="w-full h-min-fit h-full relative py-6"
          />
        }
      >
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Nombre</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="text-right font-semibold">Admin</TableHead>
            </TableRow>
          </TableHeader>
          <TableContents page={parseInt(page)} />
        </Table>
      </Suspense>
    </main>
  );
};

export default page;

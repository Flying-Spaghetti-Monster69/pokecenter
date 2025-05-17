import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getUsersByPage } from "@/utils/actions";
import MakeAdminButton from "./MakeAdminButton";
const TableContents = async ({ page }: { page: number }) => {
  const users = await getUsersByPage(page);

  if (!users) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="text-center">
            No hay usuarios
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {users.map((user) => {
        return (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">
              <MakeAdminButton userId={user.id} />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableContents;

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getNumberOfPagesInAdmin } from "@/utils/actions";
import { JSX } from "react";

const baseUrl = "/enfermera/admin";

const isInPages = (num: number, pages: number) => {
  return num > 0 && num <= pages;
};

const getNumberPage = (number: number, isActive: boolean = false) => {
  return (
    <PaginationItem key={number}>
      <PaginationLink href={`${baseUrl}/${number}`} isActive={isActive}>
        {number}
      </PaginationLink>
    </PaginationItem>
  );
};

const NearbyPages = (page: number, pages: number) => {
  if (!isInPages(page, pages)) {
    return (
      <PaginationItem>
        <PaginationLink href={`${baseUrl}/1`}>1</PaginationLink>
      </PaginationItem>
    );
  }
  const pagination: JSX.Element[] = [];

  if (page - 2 > 0) {
    pagination.push(
      <PaginationItem key={page - 2}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  }

  if (page - 1 > 0) {
    pagination.push(getNumberPage(page - 1));
  }

  pagination.push(getNumberPage(page, true));

  let nextPages = page;

  while (nextPages < pages) {
    nextPages++;

    if (nextPages === page + 3) {
      pagination.push(
        <PaginationItem key={page + 3}>
          <PaginationEllipsis />
        </PaginationItem>
      );
      break;
    }

    pagination.push(getNumberPage(nextPages));
  }

  return pagination;
};

const AdminPagination = async ({ page }: { page: number }) => {
  const response = await getNumberOfPagesInAdmin();

  if (!response) {
    return <h1>hubo un error, intenta de nuevo</h1>;
  }

  const { pages, count } = response;

  if (pages === 0) {
    return <h1>No tenemos usuarios! :C</h1>;
  }

  return (
    <>
      <p className="font-semibold text-right p-2">Total: {count}</p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={page - 1 > 0 ? `/enfermera/admin/${page - 1}` : "#"}
            />
          </PaginationItem>
          {NearbyPages(page, pages)}
          <PaginationItem>
            <PaginationNext
              href={page + 1 <= pages ? `/enfermera/admin/${page + 1}` : "#"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default AdminPagination;

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="inline-flex items-center rounded-md shadow-sm" role="group">
        <Button
          variant="outline"
          className="rounded-r-none"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          className="rounded-l-none"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

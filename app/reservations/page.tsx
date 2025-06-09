import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllReservations } from "../actions/reservations";

const Reservations = async () => {
  const reservations = await getAllReservations();

  return (
    <Table className="!max-w-xl mx-auto m-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Jméno</TableHead>
          <TableHead>Příjmení</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>S prohlídkou</TableHead>
          <TableHead>Poznámka</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reservations.map((reservation) => (
          <TableRow key={reservation.id}>
            <TableCell className="font-medium">
              {reservation.firstName}
            </TableCell>
            <TableCell>{reservation.lastName}</TableCell>
            <TableCell>{reservation.email}</TableCell>
            <TableCell className="text-center">
              {reservation.withTour ? "Ano" : "Ne"}
            </TableCell>
            <TableCell>{reservation.note}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            Celkem rezervací: {reservations.length}
          </TableCell>
          <TableCell colSpan={3}>
            Celkem prohlídek:{" "}
            {reservations.filter((reservation) => reservation.withTour).length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Reservations;

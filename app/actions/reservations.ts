'use server'

import { prisma } from "@/lib/prisma";

export const getAllReservations = async () => {
    const reservations = await prisma.confirmation.findMany({
        orderBy: {
            lastName: 'asc'
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            withTour: true,
            note: true,
        }
    });
    return reservations;
}
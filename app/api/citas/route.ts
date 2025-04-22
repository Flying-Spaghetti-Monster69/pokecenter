import { NextResponse } from "next/server";
import prisma from "@/utils/db";
import { z } from "zod";
import { citaFormSchema } from "@/utils/schemas";

interface CitaForm extends z.infer<typeof citaFormSchema> {
  userId: string;
}

export async function POST(request: Request) {
  try {
    const requestBody: CitaForm = await request.json();

    const citas = requestBody.pokemons.map((pokemon) => {
      return { ...pokemon, userId: requestBody.userId };
    });

    const createAppointments = await prisma.cita.createMany({
      data: citas,
    });

    return NextResponse.json(
      {
        message: "Data received successfully!",
        data: requestBody,
        appointments: createAppointments,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process data" },
      { status: 400 }
    );
  }
}

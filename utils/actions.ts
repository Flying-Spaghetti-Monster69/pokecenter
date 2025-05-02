"use server";
import prisma from "@/utils/db";
import { z } from "zod";
import { citaFormSchema } from "@/utils/schemas";

interface CitaForm extends z.infer<typeof citaFormSchema> {
  userId: string;
}

export const registerPokemons = async (form: CitaForm, userId: string) => {
  try {
    const citas = form.pokemons.map((pokemon) => {
      return { ...pokemon, userId: userId };
    });

    const createAppointments = await prisma.cita.createMany({
      data: citas,
    });

    return createAppointments;
  } catch (error) {
    console.error("Error processing request:", error);
  }
};

export const getUserWaitingPokemons = async (userId: string) => {
  try {
    const appointments = await prisma.cita.findMany({
      where: {
        userId: userId,
        state_cita: "espera",
      },
    });

    return appointments;
  } catch (error) {
    console.error("Error processing request:", error);
  }
};

export const getNotDonePokemons = async () => {
  try {
    const appointments = await prisma.cita.findMany({
      where: {
        NOT: { state_cita: "curado" },
      },
    });

    const waiting = appointments.filter(
      (appointment) => appointment.state_cita === "espera"
    );
    const sala1 = appointments.filter(
      (appointment) => appointment.state_cita === "sala1"
    );
    const sala2 = appointments.filter(
      (appointment) => appointment.state_cita === "sala2"
    );
    const sala3 = appointments.filter(
      (appointment) => appointment.state_cita === "sala3"
    );

    return { waiting, sala1, sala2, sala3 };
  } catch (error) {
    console.error("Error processing request:", error);
  }
};

"use server";
import prisma from "@/utils/db";
import { z } from "zod";
import { citaFormSchema } from "@/utils/schemas";
import { cita } from "./consts";

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

export const getUserWaitingPokemons = async (userId: string, state: string) => {
  try {
    if (state === "sala") {
      const appointments = await prisma.cita.findMany({
        where: {
          userId: userId,
          state_cita: {
            in: ["sala1", "sala2", "sala3"],
          },
        },
      });

      return appointments;
    } else {
      const appointments = await prisma.cita.findMany({
        where: {
          userId: userId,
          state_cita: state,
        },
      });

      return appointments;
    }
  } catch (error) {
    console.error("Error processing request:", error);
  }
};
export const getNotDonePokemons = async () => {
  try {
    const waitingPokemons: cita[] = await prisma.$queryRaw`
      SELECT * FROM "cita"
      WHERE state_cita = 'espera'
      ORDER BY  "current_PV" ASC, COALESCE(array_length("statuses", 1), 0) DESC, "level" DESC
      LIMIT 10`;

    const appointments = await prisma.cita.findMany({
      where: {
        NOT: [{ state_cita: "curado" }, { state_cita: "espera" }],
      },
    });

    const waiting = waitingPokemons;
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

const getPrismaUpdatePromiseCita = async (ids: number[], state: string) => {
  return prisma.cita.updateMany({
    where: {
      id: { in: ids },
    },
    data: {
      state_cita: state,
    },
  });
};

export const updateStateOfPokemons = async (pokemons: {
  waiting: cita[];
  sala1: cita[];
  sala2: cita[];
  sala3: cita[];
  cured: cita[];
}) => {
  try {
    const idsAndLabels: [number[], string][] = [];
    await prisma.cita.updateMany({
      where: {
        NOT: [{ state_cita: "curado" }, { state_cita: "espera" }],
      },
      data: { state_cita: "espera" },
    });

    // eslint-disable-next-line prefer-const
    for (let [key, value] of Object.entries(pokemons)) {
      if (value.length === 0) {
        continue;
      }

      if (key === "waiting") {
        key = "espera";
      }
      if (key === "cured") {
        key = "curado";
      }

      idsAndLabels.push([value.map((cita) => cita.id), key]);
    }

    const result = await Promise.all(
      idsAndLabels.map(([ids, label]) => {
        return getPrismaUpdatePromiseCita(ids, label);
      })
    );

    return result;
  } catch (error) {
    console.error(error);
  }
};

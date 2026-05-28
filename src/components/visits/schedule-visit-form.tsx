"use client";

import {
  createVisit,
  type CreateVisitPayload,
} from "@/lib/strapi/services/visits";
import {
  Calendar,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  visitors: string;
  message: string;
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 0.875rem 0.75rem 2.5rem",
  border: "1px solid rgba(0,0,0,0.12)",
  fontFamily: "var(--font-family-ui)",
  fontSize: "0.875rem",
  color: "#1a1a1a",
  backgroundColor: "#fdfcfb",
  borderRadius: "0.125rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-family-ui)",
  fontSize: "0.65rem",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#6b6560",
  marginBottom: "0.5rem",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-ui)",
  fontSize: "0.72rem",
  color: "#8B0000",
  marginTop: "0.35rem",
};

export function ScheduleVisitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      visitors: "1",
    },
  });

  const today = new Date().toISOString().split("T")[0];

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    const visitDateTime = new Date(
      `${data.date}T${data.time}:00`,
    ).toISOString();

    const payload: CreateVisitPayload = {
      fullName: data.name,
      email: data.email,
      phoneNumber: data.phone,
      visitDateTime,
      visitorsCount: parseInt(data.visitors, 10),
      additionalInformation: data.message || undefined,
    };

    try {
      await createVisit(payload);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Erro ao submeter. Tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ── Success screen ── */
  if (submitted) {
    const data = getValues();
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid rgba(0,0,0,0.07)",
          borderTop: "3px solid #D4AF37",
          padding: "3rem 2.5rem",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "rgba(212,175,55,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <CheckCircle style={{ width: 32, height: 32, color: "#D4AF37" }} />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "2rem",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "0.75rem",
          }}
        >
          Visita Agendada com Sucesso
        </h2>

        <p
          style={{
            fontFamily: "var(--font-family-ui)",
            fontSize: "0.85rem",
            color: "#6b6560",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          O seu agendamento foi registado. Entraremos em contacto com{" "}
          <strong style={{ color: "#1a1a1a" }}>{data.email}</strong> para
          confirmar os detalhes.
        </p>

        {/* Details box */}
        <div
          style={{
            backgroundColor: "#f8f7f5",
            border: "1px solid rgba(212,175,55,0.2)",
            padding: "1.5rem",
            marginBottom: "2rem",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "1rem",
            }}
          >
            Detalhes da Visita
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              { icon: <User style={{ width: 14, height: 14 }} />, text: data.name },
              {
                icon: <Calendar style={{ width: 14, height: 14 }} />,
                text: new Date(data.date).toLocaleDateString("pt-AO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
              },
              { icon: <Clock style={{ width: 14, height: 14 }} />, text: data.time },
              {
                icon: <Users style={{ width: 14, height: 14 }} />,
                text: `${data.visitors} ${parseInt(data.visitors) === 1 ? "visitante" : "visitantes"}`,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.82rem",
                  color: "#1a1a1a",
                }}
              >
                <span style={{ color: "#D4AF37" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn-gold"
            style={{
              padding: "0.9rem 2rem",
              color: "#0c0c0c",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Agendar Outra Visita
          </button>
          <a
            href="/"
            style={{
              display: "block",
              padding: "0.9rem 2rem",
              backgroundColor: "#0a0a0a",
              color: "#F2EDE4",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderTop: "2px solid rgba(212,175,55,0.4)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        padding: "2.5rem",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-family-ui)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#D4AF37",
            marginBottom: "0.75rem",
          }}
        >
          Agendamento
        </span>
        <h2
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "2rem",
            fontWeight: 300,
            color: "#1a1a1a",
            lineHeight: 1.1,
          }}
        >
          Informações da Visita
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Nome */}
        <div>
          <label htmlFor="name" style={labelStyle}>Nome Completo *</label>
          <div style={{ position: "relative" }}>
            <User
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: 16,
                height: 16,
                color: "#9a9288",
              }}
            />
            <input
              type="text"
              id="name"
              {...register("name", { required: "Nome é obrigatório" })}
              style={inputStyle}
              placeholder="Nome completo"
            />
          </div>
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>

        {/* Email + Telefone */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          <div>
            <label htmlFor="email" style={labelStyle}>E-mail *</label>
            <div style={{ position: "relative" }}>
              <Mail
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: "#9a9288",
                }}
              />
              <input
                type="email"
                id="email"
                {...register("email", { required: "E-mail é obrigatório" })}
                style={inputStyle}
                placeholder="seu@email.com"
              />
            </div>
            {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" style={labelStyle}>Telefone *</label>
            <div style={{ position: "relative" }}>
              <Phone
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: "#9a9288",
                }}
              />
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Telefone é obrigatório",
                  minLength: { value: 9, message: "Mínimo 9 dígitos" },
                })}
                style={inputStyle}
                placeholder="923 456 789"
              />
            </div>
            {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
          </div>
        </div>

        {/* Data + Horário */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          <div>
            <label htmlFor="date" style={labelStyle}>Data da Visita *</label>
            <div style={{ position: "relative" }}>
              <Calendar
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: "#9a9288",
                }}
              />
              <input
                type="date"
                id="date"
                {...register("date", { required: "Data é obrigatória" })}
                min={today}
                style={inputStyle}
              />
            </div>
            {errors.date && <p style={errorStyle}>{errors.date.message}</p>}
          </div>

          <div>
            <label htmlFor="time" style={labelStyle}>Horário *</label>
            <div style={{ position: "relative" }}>
              <Clock
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: "#9a9288",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <select
                id="time"
                {...register("time", { required: "Horário é obrigatório" })}
                style={{ ...inputStyle, appearance: "none" as const }}
              >
                <option value="">Selecione um horário</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
            {errors.time && <p style={errorStyle}>{errors.time.message}</p>}
          </div>
        </div>

        {/* Tipo de Visita + Nº Visitantes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          <div>
            <label htmlFor="type" style={labelStyle}>Tipo de Visita</label>
            <select
              id="type"
              style={{ ...inputStyle, paddingLeft: "0.875rem" }}
            >
              <option value="individual">Individual</option>
              <option value="grupo">Grupo</option>
              <option value="escolar">Escolar</option>
              <option value="corporativo">Corporativo</option>
            </select>
          </div>

          <div>
            <label htmlFor="visitors" style={labelStyle}>Nº de Visitantes *</label>
            <div style={{ position: "relative" }}>
              <Users
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: "#9a9288",
                }}
              />
              <input
                type="number"
                id="visitors"
                {...register("visitors", {
                  required: "Número de visitantes é obrigatório",
                  min: { value: 1, message: "Mínimo 1 visitante" },
                  max: { value: 50, message: "Máximo 50 visitantes" },
                })}
                style={inputStyle}
              />
            </div>
            {errors.visitors && <p style={errorStyle}>{errors.visitors.message}</p>}
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" style={labelStyle}>
            Informações Adicionais
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            style={{
              ...inputStyle,
              paddingLeft: "0.875rem",
              resize: "vertical",
              minHeight: "6rem",
            }}
            placeholder="Necessidades especiais, preferências de percurso, acessibilidade..."
          />
        </div>

        {/* Error message */}
        {submitError && (
          <div
            style={{
              padding: "0.875rem 1rem",
              backgroundColor: "rgba(139,0,0,0.06)",
              border: "1px solid rgba(139,0,0,0.2)",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.8rem",
              color: "#8B0000",
              letterSpacing: "0.02em",
            }}
          >
            {submitError}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-gold"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            width: "100%",
            padding: "1.1rem 2rem",
            color: "#0c0c0c",
            fontFamily: "var(--font-family-ui)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? (
            <Loader2
              style={{ width: 16, height: 16, animation: "spin 1s linear infinite" }}
            />
          ) : (
            <Calendar style={{ width: 16, height: 16 }} />
          )}
          {isSubmitting ? "A submeter..." : "Confirmar Agendamento"}
        </button>
      </form>
    </div>
  );
}

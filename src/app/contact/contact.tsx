import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  preferredTime: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    preferredTime: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const WHATSAPP_NUMBER = "573105458117"; // poner sin + ni espacios -> ej: 57310...
  const PHONE_NUMBER = "+57 310 545 8117";

  function validate(): boolean {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Ingresa tu nombre";
    if (!form.phone.trim()) newErrors.phone = "Ingresa un teléfono";
    // Básico: teléfono de 7-15 dígitos (adaptable)
    if (form.phone && !/^[\d+\s()-]{7,20}$/.test(form.phone))
      newErrors.phone = "Teléfono inválido";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Email inválido";
    if (!form.service) newErrors.service = "Selecciona un servicio";
    if (!form.address.trim()) newErrors.address = "Indica la dirección";
    if (!form.message.trim()) newErrors.message = "Escribe un mensaje breve";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(null);

    try {
      // === Aquí es donde integras tu API real ===
      // Ejemplos: POST a /api/contact, Netlify Forms, Formspree, SendGrid, Supabase, etc.
      // Simulamos un envío:
      await new Promise((res) => setTimeout(res, 900));

      setSuccess(
        "Mensaje enviado con éxito. En breve nos comunicaremos para confirmar la visita."
      );
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        address: "",
        preferredTime: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      setSuccess(
        "Error enviando. Intenta de nuevo o llama al número de contacto."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-16 mt-5 md:mt-15">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contáctanos / Solicita tu mecánico a domicilio
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Rellena el formulario o usa WhatsApp / llamada para respuesta más
            rápida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 rounded-xl shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Nombre *
                </span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Juan Pérez"
                />
                {errors.name && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Teléfono *
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="+57 300 000 0000"
                />
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.phone}
                  </span>
                )}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="opcional@tucorreo.com"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Servicio *
                </span>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option value="">Selecciona...</option>
                  <option value="diagnostico">Diagnóstico / Revisión</option>
                  <option value="bateria">Cambio / Revisión batería</option>
                  <option value="frenos">Frenos</option>
                  <option value="mecanica">Mecánica general</option>
                  <option value="aire">Aire acondicionado</option>
                  <option value="otros">Otros</option>
                </select>
                {errors.service && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.service}
                  </span>
                )}
              </label>

              <label className="col-span-1 md:col-span-2 flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Dirección *
                </span>
                <input
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Calle 123 #45-67, Barrio"
                />
                {errors.address && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.address}
                  </span>
                )}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Hora preferida
                </span>
                <input
                  value={form.preferredTime}
                  onChange={(e) =>
                    setForm({ ...form, preferredTime: e.target.value })
                  }
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Ej: Hoy 10:00 - 12:00"
                />
              </label>

              <label className="col-span-1 md:col-span-2 flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Mensaje *
                </span>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-2 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 min-h-[120px]"
                  placeholder="Describe el problema con el vehículo..."
                />
                {errors.message && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 bg-[#F5C32E] text-black rounded-lg font-semibold shadow hover:bg-yellow-400 disabled:opacity-60 transition"
              >
                {submitting ? "Enviando..." : "Solicitar visita"}
              </button>

              <button
                type="button"
                onClick={() => {
                  // Prepara un mensaje de WhatsApp con los datos del formulario
                  const text = encodeURIComponent(
                    `Hola, necesito servicio. Nombre: ${
                      form.name || "[no especificado]"
                    }. Tel: ${form.phone || "[no especificado]"}. Servicio: ${
                      form.service || "[no especificado]"
                    }. Dirección: ${
                      form.address || "[no especificado]"
                    }. Mensaje: ${form.message || "[no especificado]"}`
                  );
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
                    "_blank"
                  );
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:brightness-95 transition"
              >
                Contactar por WhatsApp
              </button>
            </div>

            {success && (
              <p className="mt-4 text-sm text-green-700">{success}</p>
            )}
          </motion.form>

          {/* Contacto lateral / mapa */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white p-5 rounded-xl shadow border border-gray-100">
              <h3 className="font-semibold text-lg">Contacto rápido</h3>
              <p className="text-gray-600 mt-2">
                Teléfono:{" "}
                <a className="font-medium" href={`tel:${PHONE_NUMBER}`}>
                  {PHONE_NUMBER}
                </a>
              </p>
              <p className="text-gray-600">
                WhatsApp:{" "}
                <a
                  className="font-medium"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chatear en WhatsApp
                </a>
              </p>
              <p className="text-gray-600">Horario: Lun - Vie 05:00 - 18:00</p>
              <div className="mt-4">
                <a
                  className="inline-block px-4 py-2 bg-[#FFCC33] rounded font-semibold"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Cl. 41 #42-07, La Candelaria, Medellín"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

            <div className="bg-white p-0 overflow-hidden rounded-xl shadow border border-gray-100">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6.239882391443229,-75.56534188568509&z=16&output=embed"
              ></iframe>
            </div>

            <div className="bg-white p-4 rounded-xl shadow border border-gray-100 text-sm text-gray-700">
              <p className="font-medium">¿Preferencias?</p>
              <p className="mt-2">
                Aceptamos pagos en efectivo y transferencia. Ofrecemos garantía
                en piezas instaladas.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

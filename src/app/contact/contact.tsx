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
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const WHATSAPP_NUMBER = "573177123333";
  const PHONE_NUMBER = "+57 317 712 3333";

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!form.name.trim()) newErrors.name = "Ingresa tu nombre";
    if (!form.phone.trim()) newErrors.phone = "Ingresa un teléfono";

    if (form.phone && !/^[\d+\s()-]{7,20}$/.test(form.phone))
      newErrors.phone = "Teléfono inválido";

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Email inválido";

    if (!form.service) newErrors.service = "Selecciona un servicio";
    if (!form.message.trim()) newErrors.message = "Describe tu consulta";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(null);

    try {
      const res = await fetch("https://formspree.io/f/mdkqladn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error");

      setSuccess("Mensaje enviado con éxito. Te contactaremos pronto 😄");
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
      setSuccess("❗ Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 mt-5 md:mt-15">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contáctanos o solicita tu mecánico</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Escríbenos tu consulta o solicita cotización. Respuesta rápida por WhatsApp 📲
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* ==== FORMULARIO ==== */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 rounded-xl shadow space-y-4"
          >
            {/* Nombre */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Nombre *</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 p-2 rounded border border-gray-200 focus:ring-2 focus:ring-yellow-300"
                placeholder="Tu nombre"
              />
              {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
            </label>

            {/* Teléfono */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Teléfono o WhatsApp *</span>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 p-2 rounded border border-gray-200 focus:ring-2 focus:ring-yellow-300"
                placeholder="Ej. 300 123 4567"
              />
              {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone}</span>}
            </label>

            {/* Motivo */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Motivo de consulta *</span>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-2 p-2 rounded border border-gray-200 focus:ring-2 focus:ring-yellow-300"
              >
                <option value="">Selecciona una opción</option>
                <option value="cotizacion">Cotización de servicio</option>
                <option value="fallas">Tengo una falla en el vehículo</option>
                <option value="repuestos">Consulta de repuestos</option>
                <option value="mantenimiento">Mantenimiento preventivo</option>
                <option value="pregunta_general">Pregunta general</option>
                <option value="otros">Otros</option>
              </select>
              {errors.service && <span className="text-xs text-red-500 mt-1">{errors.service}</span>}
            </label>

            {/* Mensaje */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Detalles *</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 p-2 rounded border border-gray-200 focus:ring-2 focus:ring-yellow-300 min-h-[120px]"
                placeholder="Ej. Mi carro falla en subidas, ¿cuál podría ser la causa?"
              />
              {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message}</span>}
            </label>

            {/* Botones */}
            <div className="flex items-center gap-3 mt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 bg-[#F5C32E] text-black rounded-lg font-semibold shadow hover:bg-yellow-400 disabled:opacity-60 transition"
              >
                {submitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              <button
                type="button"
                onClick={() => {
                  const text = encodeURIComponent(
                    `Hola, tengo una consulta:\n👤 Nombre: ${form.name}\n📞 Teléfono: ${form.phone}\n📌 Tema: ${form.service}\n💬 Mensaje: ${form.message}`
                  );
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:brightness-95"
              >
                WhatsApp
              </button>
            </div>

            {success && <p className="text-sm text-green-700 mt-2">{success}</p>}
          </motion.form>

          {/* ==== CONTACTO LATERAL ==== */}
          <motion.aside
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold text-lg">Atención rápida</h3>
              <p className="text-gray-600 mt-2">
                Teléfono:&nbsp;
                <a href={`tel:${PHONE_NUMBER}`} className="font-medium text-blue-600">
                  {PHONE_NUMBER}
                </a>
              </p>
              <p className="text-gray-600">
                WhatsApp:&nbsp;
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="font-medium text-green-600" target="_blank">
                  Enviar mensaje
                </a>
              </p>
              <p className="text-gray-600 mt-2">Horarios: <b>Lun - Vie 05:00 - 18:00</b></p>
            </div>

            {/* Mapa */}
            <div className="bg-white overflow-hidden rounded-xl shadow">
              <iframe
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=6.239882391443229,-75.56534188568509&z=16&output=embed"
              ></iframe>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-gray-700 text-sm">
              <p className="font-medium">Métodos de pago:</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Efectivo</li>
                <li>Transferencia</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

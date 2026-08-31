import { useEffect, useState } from "react";
import { AnalyticsEvents, EventLabels, PageNames } from "../../constants/enums";
import { lazy, Suspense } from "react";
import { getCurrentPageName, pushDataLayerEvent } from "../../utils/analytics";
import Reveal from "../../components/Ui/Reveal";

const GoogleMapComponent = lazy(() => import("../../components/Ui/GoogleMapComponent"));

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
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 2000);
    return () => clearTimeout(timer);
  }, []);
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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const WHATSAPP_NUMBER = "573177123333";
  const PHONE_NUMBER = "+57 317 712 3333"; // formato para mostrar
  const PHONE_TEL = "+573177123333"; // formato E.164 para el enlace tel:

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
    setErrorMsg(null);

    try {
      // 🔥 convertir a formato compatible con Formspree
      const body = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        address: form.address,
        preferredTime: form.preferredTime,
        message: form.message,
      }).toString();

      const res = await fetch("https://formspree.io/f/mdkqladn", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      });

      // Formspree responde 2xx en éxito; el cuerpo puede o no traer { ok: true }.
      // Solo tratamos como error un status HTTP no correcto.
      if (!res.ok) {
        throw new Error("Error en el envío");
      }

      // ✅ éxito
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

      pushDataLayerEvent({
        event: AnalyticsEvents.FORM_SUBMIT,
        event_category: "conversion",
        event_label: EventLabels.CONTACT_FORM,
        page_name: PageNames.CONTACT,
      });

      // limpiar mensaje después de 5s
      setTimeout(() => setSuccess(null), 5000);

    } catch {
      setErrorMsg("❗ Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 mt-5 md:mt-15">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contáctanos o solicita tu mecánico a domicilio en Medellín</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Escríbenos tu consulta o solicita cotización. Respuesta rápida por WhatsApp 📲
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ==== FORMULARIO ==== */}
          <form
            onSubmit={handleSubmit}
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
                  pushDataLayerEvent({
                    event: AnalyticsEvents.WHATSAPP_CLICK,
                    event_category: "conversion",
                    event_label: EventLabels.CONTACT_FORM,
                    page_name: PageNames.CONTACT,
                  });

                  // abrir WhatsApp
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}`,
                    "_blank"
                  );
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:brightness-95"
              >
                WhatsApp
              </button>
            </div>

            {success && <p className="text-sm text-green-700 mt-2">{success}</p>}
            {errorMsg && <p className="text-sm text-red-600 mt-2">{errorMsg}</p>}
          </form>

          {/* ==== CONTACTO LATERAL ==== */}
          <aside className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold text-lg">Atención rápida</h3>
              <p className="text-gray-600 mt-2">
                Teléfono:&nbsp;
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={() => {
                    pushDataLayerEvent({
                      event: AnalyticsEvents.CALL_CLICK,
                      event_category: "conversion",
                      event_label: EventLabels.CONTACT_FORM,
                      page_name: getCurrentPageName(),
                    });
                  }}
                  className="font-medium text-blue-600"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
              <p className="text-gray-600 mt-2">Horarios: <b>Lun - Vie 07:00 - 17:00 · Sáb - Dom 07:00 - 14:00</b></p>
            </div>

            {/* Mapa */}
            <div className="bg-white overflow-hidden rounded-xl shadow">
              {showMap && (
                <Suspense fallback={<div className="p-4">Cargando mapa...</div>}>
                  <GoogleMapComponent />
                </Suspense>
              )}
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-gray-700 text-sm">
              <p className="font-medium">Métodos de pago:</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Efectivo</li>
                <li>Transferencia</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

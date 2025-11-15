export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const event = req.body;

    console.log("📩 Evento recebido do ASAAS:", event);

    if (event.event === "PAYMENT_CONFIRMED") {
      console.log("💸 PAGAMENTO CONFIRMADO:", event.payment);
    }

    if (event.event === "PIX_RECEIVED") {
      console.log("⚡ PIX RECEBIDO:", event.pix);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Erro no webhook:", error);
    return res.status(500).json({ error: "Erro interno" });
  }
}

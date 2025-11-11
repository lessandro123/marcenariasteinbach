import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Valida os dados recebidos
    const validatedData = contactFormSchema.parse(body);

    // Log dos dados recebidos (para desenvolvimento)
    console.log('📧 Novo contato recebido:', validatedData);

    // Verifica se as variáveis de ambiente estão configuradas
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY não configurada');
    }

    if (!process.env.CONTACT_EMAIL) {
      throw new Error('CONTACT_EMAIL não configurada');
    }

    // Inicializa o Resend apenas quando necessário
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Monta o corpo do email em texto simples
    const emailBody = `
NOVO CONTATO - Marcenaria Steinbach

Nome: ${validatedData.name}
Telefone: ${validatedData.phone}
Comentário: ${validatedData.comment || 'Nenhum comentário fornecido'}

---
Este email foi enviado através do formulário de contato do site.
Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
    `.trim();

    // Envia o email usando Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: `Novo Contato - ${validatedData.name}`,
      text: emailBody,
    });

    if (error) {
      console.error('❌ Erro ao enviar email:', error);
      throw error;
    }

    console.log('✅ Email enviado com sucesso:', data);

    return NextResponse.json(
      { message: 'Contato enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Erro ao processar contato:', error);

    // Retorna erro para ativar o fallback do WhatsApp
    return NextResponse.json(
      {
        error: 'Não foi possível enviar o email. Redirecionando para WhatsApp...',
        fallbackToWhatsApp: true
      },
      { status: 500 }
    );
  }
}

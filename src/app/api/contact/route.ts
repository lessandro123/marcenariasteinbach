import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Valida os dados recebidos
    const validatedData = contactFormSchema.parse(body);

    // TODO: Configurar serviço de email (Resend, SendGrid, Nodemailer, etc.)
    // Por enquanto, vamos simular o envio de email

    // Exemplo de configuração futura:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'contato@marcenaria-steinbach.com.br',
    //   to: 'atendimento@marcenaria-steinbach.com.br',
    //   subject: `Novo contato de ${validatedData.name}`,
    //   html: `
    //     <h2>Novo Contato Recebido</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>Telefone:</strong> ${validatedData.phone}</p>
    //     <p><strong>Comentário:</strong> ${validatedData.comment || 'Nenhum comentário'}</p>
    //   `,
    // });

    // Log dos dados recebidos (para desenvolvimento)
    console.log('📧 Novo contato recebido:', validatedData);

    // Simula um delay de rede
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Por enquanto, vamos retornar erro para testar o fallback do WhatsApp
    // Quando configurar o serviço de email, remova este throw
    throw new Error('Serviço de email não configurado - usando fallback WhatsApp');

    // Quando o email estiver configurado, retornar sucesso:
    // return NextResponse.json(
    //   { message: 'Contato enviado com sucesso!' },
    //   { status: 200 }
    // );
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

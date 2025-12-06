'use client';

import { useState } from 'react';
import { ProgressiveForm } from '@/components/ui/progressive-form';
import { type ContactFormData } from '@/lib/validations';
import { MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Primeiro: tentar enviar por email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Se falhar, usar fallback do WhatsApp
        if (result.fallbackToWhatsApp) {
          handleWhatsAppFallback(data);
        } else {
          throw new Error(result.error || 'Erro ao enviar contato');
        }
      } else {
        // Sucesso no envio por email
        setSubmitStatus('success');
        setStatusMessage('Contato enviado com sucesso! Em breve entraremos em contato.');
      }
    } catch (error) {
      console.error('Erro ao enviar contato:', error);
      // Em caso de erro, também usa o WhatsApp
      handleWhatsAppFallback(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppFallback = (data: ContactFormData) => {
    // Número do WhatsApp da Marcenaria Steinbach
    const phoneNumber = '5548996055656'; // Formato: 55 + DDD + Número

    // Monta a mensagem para o WhatsApp
    const message = `Olá! Meu nome é ${data.name}.

📱 Telefone: ${data.phone}
${data.comment ? `\n💬 Comentário: ${data.comment}` : ''}

Gostaria de mais informações sobre os móveis da Marcenaria Steinbach.`;

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, '_blank');

    // Mostra mensagem de redirecionamento
    setSubmitStatus('success');
    setStatusMessage('Redirecionando para WhatsApp...');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
            <MessageSquare className="w-5 h-5 text-[var(--red-primary)]" />
            <span className="text-sm font-medium text-[var(--red-primary)]">
              Entre em Contato
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--red-primary)] to-[var(--red-hover)] bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            transformar seus sonhos em realidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {submitStatus === 'idle' ? (
              <ProgressiveForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-12"
                >
                  {submitStatus === 'success' ? (
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Mensagem Enviada!
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        {statusMessage}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitStatus('idle');
                          setStatusMessage('');
                        }}
                        className="mt-6 px-6 py-3 bg-[var(--red-primary)] hover:bg-[var(--red-hover)] text-white rounded-lg font-semibold transition-colors"
                      >
                        Enviar Novo Contato
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                        <XCircle className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Ops! Algo deu errado
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        {statusMessage}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitStatus('idle');
                          setStatusMessage('');
                        }}
                        className="mt-6 px-6 py-3 bg-[var(--red-primary)] hover:bg-[var(--red-hover)] text-white rounded-lg font-semibold transition-colors"
                      >
                        Tentar Novamente
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Informações de contato alternativas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            <p>
              Ou entre em contato diretamente pelo WhatsApp:{' '}
              <button
                onClick={() =>
                  window.open('https://wa.me/5548996055656', '_blank')
                }
                className="text-[var(--red-primary)] hover:underline font-medium"
              >
                (48) 99605-5656
              </button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

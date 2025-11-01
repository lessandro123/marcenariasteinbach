'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MaskedInput } from './masked-input';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { ChevronRight, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressiveFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting?: boolean;
}

export function ProgressiveForm({ onSubmit, isSubmitting = false }: ProgressiveFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  // Função para avançar para a próxima etapa (validando o campo atual)
  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger('name');
      if (isValid) {
        setCompletedSteps((prev) => [...prev, 1]);
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      isValid = await trigger('phone');
      if (isValid) {
        setCompletedSteps((prev) => [...prev, 2]);
        setCurrentStep(3);
      }
    }
  };

  // Função para voltar para a etapa anterior
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, label: 'Nome', field: 'name' },
    { number: 2, label: 'Telefone', field: 'phone' },
    { number: 3, label: 'Comentário', field: 'comment' },
  ];

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto">
      {/* Barra de Progresso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all',
                currentStep >= step.number
                  ? 'bg-[var(--red-primary)] border-[var(--red-primary)] text-white'
                  : 'bg-white border-gray-300 text-gray-400',
                completedSteps.includes(step.number) && 'bg-green-500 border-green-500'
              )}
            >
              {completedSteps.includes(step.number) ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-semibold">{step.number}</span>
              )}
            </div>
          ))}
        </div>

        {/* Barra de progresso animada */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--red-primary)] to-[var(--red-hover)]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
          />
        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-600">
          {steps.map((step) => (
            <span
              key={step.number}
              className={cn(
                'transition-colors',
                currentStep >= step.number && 'text-[var(--red-primary)] font-medium'
              )}
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>

      {/* Campos do Formulário com Animações */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {/* Etapa 1: Nome */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                Qual é o seu nome?
              </label>
              <input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                className={cn(
                  'flex h-14 w-full rounded-lg border bg-white px-4 py-3 text-base transition-colors',
                  'placeholder:text-gray-400',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--red-primary)] focus:border-transparent',
                  errors.name ? 'border-red-500' : 'border-gray-300'
                )}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}

              {/* Botão Próximo */}
              <button
                type="button"
                onClick={handleNextStep}
                className={cn(
                  'mt-4 w-full h-14 rounded-lg font-semibold text-white text-lg',
                  'bg-[var(--red-primary)] hover:bg-[var(--red-hover)]',
                  'transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--red-primary)] focus:ring-offset-2',
                  'flex items-center justify-center gap-2'
                )}
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Etapa 2: Telefone */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="phone" className="block text-lg font-medium text-gray-900">
                Qual é o seu telefone?
              </label>
              <MaskedInput
                id="phone"
                mask="phone"
                placeholder="(00) 00000-0000"
                className={cn(
                  'h-14',
                  errors.phone && 'border-red-500'
                )}
                {...register('phone')}
                autoFocus
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}

              {/* Botões de Navegação */}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className={cn(
                    'flex-1 h-14 rounded-lg font-semibold text-gray-700 text-lg',
                    'bg-gray-200 hover:bg-gray-300',
                    'transition-colors duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                  )}
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className={cn(
                    'flex-1 h-14 rounded-lg font-semibold text-white text-lg',
                    'bg-[var(--red-primary)] hover:bg-[var(--red-hover)]',
                    'transition-colors duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--red-primary)] focus:ring-offset-2',
                    'flex items-center justify-center gap-2'
                  )}
                >
                  Próximo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Etapa 3: Comentário */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="comment" className="block text-lg font-medium text-gray-900">
                Quer nos contar mais alguma coisa? (Opcional)
              </label>
              <textarea
                id="comment"
                rows={4}
                placeholder="Digite seu comentário ou dúvida..."
                className={cn(
                  'flex w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base transition-colors',
                  'placeholder:text-gray-400 resize-none',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--red-primary)] focus:border-transparent',
                  errors.comment && 'border-red-500'
                )}
                {...register('comment')}
                autoFocus
              />
              {errors.comment && (
                <p className="text-sm text-red-500">{errors.comment.message}</p>
              )}

              {/* Botões de Navegação e Envio */}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className={cn(
                    'flex-1 h-14 rounded-lg font-semibold text-gray-700 text-lg',
                    'bg-gray-200 hover:bg-gray-300',
                    'transition-colors duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                  )}
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'flex-1 h-14 rounded-lg font-semibold text-white text-lg',
                    'bg-[var(--red-primary)] hover:bg-[var(--red-hover)]',
                    'transition-colors duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--red-primary)] focus:ring-offset-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'flex items-center justify-center gap-2'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Contato
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

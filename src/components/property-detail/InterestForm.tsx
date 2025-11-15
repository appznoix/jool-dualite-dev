import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface InterestFormProps {
  propertyName: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const InterestForm = ({ propertyName }: InterestFormProps) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Data Submitted:", data);
    // Simulate success/error
    if (Math.random() > 0.1) { // 90% success rate
        setStatus('success');
    } else {
        setStatus('error');
    }
  };

  const defaultMessage = t('propertyDetail.form.defaultMessage', { propertyName });

  const renderStatus = () => {
    switch (status) {
      case 'success':
        return (
          <div className="text-center p-8 bg-green-50 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="font-semibold text-green-700">{t('propertyDetail.form.success')}</p>
          </div>
        );
      case 'error':
        return (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="font-semibold text-red-700">{t('propertyDetail.form.error')}</p>
            <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-ocean-deep underline">Tentar novamente</button>
          </div>
        );
      default:
        return (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">{t('propertyDetail.form.name')}</label>
              <input
                id="name"
                type="text"
                placeholder={t('propertyDetail.form.name')}
                {...register('name', { required: t('propertyDetail.form.validation.required') as string })}
                className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-brand-gray'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{t('propertyDetail.form.email')}</label>
              <input
                id="email"
                type="email"
                placeholder={t('propertyDetail.form.email')}
                {...register('email', { 
                    required: t('propertyDetail.form.validation.required') as string,
                    pattern: { value: /^\S+@\S+$/i, message: t('propertyDetail.form.validation.email') as string }
                })}
                className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-brand-gray'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">{t('propertyDetail.form.phone')}</label>
              <input
                id="phone"
                type="tel"
                placeholder={t('propertyDetail.form.phone')}
                {...register('phone', { required: t('propertyDetail.form.validation.required') as string })}
                className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-brand-gray'}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{t('propertyDetail.form.message')}</label>
              <textarea
                id="message"
                rows={4}
                placeholder={t('propertyDetail.form.message')}
                defaultValue={defaultMessage}
                {...register('message')}
                className="w-full p-3 border border-brand-gray rounded-md"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-ocean-deep text-white py-3 rounded-md font-bold hover:bg-ocean-light transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t('propertyDetail.form.sending')}
                </>
              ) : (
                t('propertyDetail.form.send')
              )}
            </motion.button>
          </form>
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-brand-gray">
      <h3 className="text-2xl font-serif text-ocean-deep mb-4 text-center">{t('propertyDetail.requestInfo')}</h3>
      {renderStatus()}
    </div>
  );
};

export default InterestForm;

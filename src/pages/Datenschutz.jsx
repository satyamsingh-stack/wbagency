import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

export default function Datenschutz({ onBack }) {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Zurück
        </motion.button>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h1 className="text-4xl font-bold gradient-text mb-8">Datenschutzerklärung</h1>
          
          <div className="text-white/80 space-y-6">
            <section>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften der Schweiz sowie – soweit anwendbar – der Datenschutz-Grundverordnung (DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Verantwortliche Stelle</h2>
              <div className="space-y-2 text-sm">
                <p><strong className="text-white">Dreiland Digital Services</strong></p>
                <p><strong className="text-white">Inhaber:</strong> Thomas Hornung</p>
                <p><strong className="text-white">Hornung Consulting</strong></p>
                <p>Missionstrasse 24<br />4055 Basel<br />Schweiz</p>
                <p><strong className="text-white">E-Mail:</strong> <a href="mailto:support@hornungdigital.com" className="text-cyan-400 hover:text-cyan-300">support@hornungdigital.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Besuch dieser Website können automatisch technische Informationen erfasst werden, beispielsweise:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>IP-Adresse</li>
                <li>Browsertyp</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Besuchte Seiten</li>
              </ul>
              <p className="mt-3">
                Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Kontaktformular / E-Mail-Kontakt</h2>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p>
                Diese Website kann Cookies verwenden, um die Benutzerfreundlichkeit zu verbessern. Sie können die Speicherung von Cookies in Ihren Browsereinstellungen deaktivieren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Ihre Rechte</h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Änderungen</h2>
              <p>
                Diese Datenschutzerklärung kann bei Bedarf angepasst werden.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

export default function Impressum({ onBack }) {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Impressum</h1>
          
          <div className="text-white/80 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß Art. 3 Abs. 1 lit. s UWG (Schweiz)</h2>
              <div className="space-y-2 text-sm">
                <p><strong className="text-white">Dreiland Digital Services</strong></p>
                <p><strong className="text-white">Inhaber:</strong> Thomas Hornung</p>
                <p><strong className="text-white">Hornung Consulting</strong></p>
                <p>Missionstrasse 24<br />4055 Basel<br />Schweiz</p>
                <p><strong className="text-white">E-Mail:</strong> <a href="mailto:support@hornungdigital.com" className="text-cyan-400 hover:text-cyan-300">support@hornungdigital.com</a></p>
                <p><strong className="text-white">Website:</strong> <a href="https://www.hornungdigital.ch" className="text-cyan-400 hover:text-cyan-300">www.hornungdigital.ch</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Verantwortlich für den Inhalt:</h2>
              <p>Thomas Hornung</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Haftungsausschluss</h2>
              <p>
                Alle Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Urheberrechte</h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Jegliche Verwendung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

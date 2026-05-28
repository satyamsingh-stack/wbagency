import { motion } from 'framer-motion'

export default function Legal() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="legal" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Impressum <span className="gradient-text">/ Datenschutz</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Legal information for Dreiland Digital Services
          </p>
        </motion.div>

        {/* Legal Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {/* Impressum Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Impressum</h3>
            <div className="space-y-4 text-white/70">
              <p><strong>Dreiland Digital Services</strong></p>
              <p>Thomas Hornung</p>
              <p>Email: </p>
              <p>Website: </p>
              <p>Registered as a sole proprietorship</p>
              <p>VAT ID: Not applicable (small business regulation)</p>
            </div>
          </motion.div>

          {/* Datenschutz Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Datenschutz</h3>
            <div className="space-y-4 text-white/70">
              <p><strong>1. Datenverarbeitung auf dieser Website</strong></p>
              <p>Beim Besuch unserer Website werden keine personenbezogenen Daten gespeichert, außer jener, die Ihr Browser automatisch übermittelt (wie z.B. IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendete Browser-Software). Diese Daten werden ausschließlich für statistische Auswertungen verwendet und ermöglichen keinerlei Rückschluss auf Ihre Person.</p>
              
              <p><strong>2. Cookies</strong></p>
              <p>Diese Website verwendet keine Cookies zur Speicherung von Besucherdaten.</p>
              
              <p><strong>3. Kontaktformulare</strong></p>
              <p>Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              
              <p><strong>4. Weitergabe an Dritte</strong></p>
              <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt nicht.</p>
              
              <p><strong>5. Ihre Rechte</strong></p>
              <p>Sie haben das Recht, unentgeltlich Auskunft über die bei uns gespeicherten Daten zu erhalten sowie gegebenenfalls das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="glass rounded-2xl p-8 text-center"
          >
            <p className="text-white/60">
              Für weitere Fragen zum Impressum oder Datenschutz kontaktieren Sie uns bitte direkt.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
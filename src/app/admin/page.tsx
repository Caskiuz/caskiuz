export default function AdminPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Admin Panel
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Panel de <span className="gradient-text">Administración</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Aquí podrás gestionar los mensajes de contacto, suscriptores y
            contenido del blog una vez conectada la base de datos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <div className="text-sm font-medium">Mensajes Pendientes</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <div className="text-sm font-medium">Suscriptores</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <div className="text-sm font-medium">Posts Publicados</div>
          </div>
        </div>

        <div className="mt-12 glass-card p-8 text-center">
          <h2 className="text-xl font-bold mb-4">
            ⚠️ Base de datos no configurada
          </h2>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Para habilitar el panel completo, crea una base de datos MySQL gratuita en{" "}
            <a href="https://aiven.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              Aiven.io
            </a>
            , copia la <strong>Service URI</strong> y pégala como{" "}
            <code className="px-2 py-0.5 bg-muted rounded text-sm">
              DATABASE_URL
            </code>{" "}
            en el archivo <code className="px-2 py-0.5 bg-muted rounded text-sm">.env</code>.
            Luego ejecuta:
          </p>
          <div className="inline-block text-left bg-surface border border-border rounded-xl p-4 text-sm font-mono">
            npx prisma db push
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Formato esperado: mysql://user:password@host:port/dbname
          </p>
        </div>
      </div>
    </div>
  );
}
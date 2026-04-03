import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Legal = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container max-w-3xl prose prose-invert prose-sm">
        <h1 className="font-display text-5xl text-foreground mb-8">Aviso Legal</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl text-foreground">Aviso Legal</h2>
            <p className="text-muted-foreground">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Razón social:</strong> <em>[PENDIENTE DE COMPLETAR]</em></li>
              <li><strong className="text-foreground">CIF:</strong> <em>[PENDIENTE DE COMPLETAR]</em></li>
              <li><strong className="text-foreground">Domicilio:</strong> P.º del Óvalo, 14, 44001 Teruel</li>
              <li><strong className="text-foreground">Email:</strong> <em>[PENDIENTE DE COMPLETAR]</em></li>
              <li><strong className="text-foreground">Teléfono:</strong> +34 662 38 16 65</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Política de Privacidad</h2>
            <p className="text-muted-foreground">
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos de que los datos personales que nos facilite serán tratados con la finalidad de gestionar su consulta o reserva.
            </p>
            <p className="text-muted-foreground">
              Sus datos no serán cedidos a terceros salvo obligación legal. Puede ejercer sus derechos de acceso, rectificación, supresión y demás reconocidos en la normativa dirigiéndose a la dirección indicada.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Política de Cookies</h2>
            <p className="text-muted-foreground">
              Esta web puede utilizar cookies técnicas y analíticas. Al navegar por ella, acepta su uso. Puede configurar su navegador para rechazar cookies.
            </p>
          </section>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
            <p className="text-sm text-accent font-medium">⚠️ Estos textos requieren revisión legal profesional antes de su publicación.</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Legal;

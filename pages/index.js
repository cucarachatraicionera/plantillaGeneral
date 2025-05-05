
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>¡Dominio y Servidor Activos!</title>
        <meta name="description" content="Inicio de un nuevo proyecto increíble." />
      </Head>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#ecfeff',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#0e7490' }}>👋 ¡Olaaa!</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem', color: '#0369a1' }}>
          Ya tenemos el dominio y el servidor comprado LATORRE DEJA TU VISAJE JAJAAJAJA.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem', color: '#0891b2' }}>
          De aquí pa' allá... 🚀 ¡Arrancamos el desarrollo con toda!
        </p>
        <p style={{ marginTop: '2rem', fontWeight: 'bold', color: '#0f172a' }}>
          ¿Listo para ver algo increíble? 👀
        </p>
      </div>
    </>
  );
}

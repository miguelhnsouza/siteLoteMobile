import { useUTM } from '../hooks/useUTM';

function ExemploComponente() {
  const { utmParams, addUTMToLink, hasUTM } = useUTM();

  return (
    <div>
      {hasUTM && (
        <p>UTM detectados: {JSON.stringify(utmParams)}</p>
      )}

      <a href={addUTMToLink("https://exemplo.com/pagina")}>
        Link com UTM
      </a>

      <a href={addUTMToLink("https://outra-url.com")}>
        Outro link
      </a>
    </div>
  );
}

export default ExemploComponente;
import { headers } from 'next/headers';

export default function DownloadPage() {
  const userAgent = headers().get('user-agent') || 'Win';

  return (
    <section className="">
      <header className="">
        Download
        <div className="">Oneapp is available on all platforms</div>
      </header>

      <div className="">
        <div>
          <h3 className="">Desktop</h3>

          {userAgent.indexOf('Win') != -1 ? (
            <a target="_blank" href="google.com">
              Download for Windows
            </a>
          ) : null}

          {userAgent.indexOf('Mac') != -1 ? (
            <a target="_blank" href="google.com">
              Download for MacOS
            </a>
          ) : null}

          {userAgent.indexOf('Linux') != -1 ? (
            <a target="_blank" href="google.com">
              Download for Linux
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

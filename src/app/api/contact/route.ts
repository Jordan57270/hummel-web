import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { nom, email, activite, message } = await req.json();

    if (!nom || !email) {
      return NextResponse.json(
        { error: 'Nom et email sont requis.' },
        { status: 400 }
      );
    }

    // Envoi via FormSubmit.co (gratuit, sans inscription)
    const res = await fetch('https://formsubmit.co/ajax/jecreevotresite@yahoo.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: nom,
        email: email,
        activite: activite || 'Non renseigne',
        message: message || 'Aucun message',
        _subject: `Nouveau contact HJ_WEB — ${nom}`,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}

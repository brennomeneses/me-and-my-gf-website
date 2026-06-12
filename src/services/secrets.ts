const functions = {
  "apollo": () => window.location.replace("https://www.tiktok.com/@_teixeri/video/7614117304539925780?q=Recuperamos%20a%20bola&t=1781231015354"),
  "nothing else matters": () => window.location.replace("https://www.youtube.com/watch?v=MSDG-cBv2CY"),
  "te amo": () => window.location.replace("https://raw.githubusercontent.com/brennomeneses/me-and-my-gf-website/refs/heads/main/src/assets/us.jpg"),
}

export const handle = (text: string) => {
  return functions[text.toLowerCase() as "apollo", "nothing else matters", "te amo"]()
}
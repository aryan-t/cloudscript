
export function googleAnalytics(name) {
  gtag('event', 'screen_view', {screen_name: name})
}
// npm install --save sakana-widget
import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';
new SakanaWidget().mount('#sakana-widget');

const github = SakanaWidget.getCharacter('chisato');
github.image = `https://raw.githubusercontent.com/dsrkafuu/sakana-widget/main/docs/github.png`;
SakanaWidget.registerCharacter('github', github);
new SakanaWidget({ character: 'github' }).mount('#sakana-widget');
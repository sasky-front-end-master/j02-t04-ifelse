import { Selector, t } from 'testcafe';

fixture `ehtorakenne if/else`
    .page `../tehtava.html`;

test('Ostos onnistuu', async t => {
   const hinta = Selector("#hinta");
   const raha = Selector("#raha");
   const nappi = Selector("#nappi");
   const out = Selector("#out");
   const hluku = 1 + Math.floor(Math.random()*20);
   const rluku = hluku + 2;
   const hintaluku = hluku.toString();
   const rahaluku = rluku.toString();
   const ostoviesti = "Bon appetit!\nRahaa taskussa 2";

   await t
     .typeText('#hinta', hintaluku)
     .typeText('#raha', rahaluku)
     .click(nappi)
     .expect(out.innerText).eql(ostoviesti);
});

test('Ostos ei onnistu', async t => {
  const hinta = Selector("#hinta");
  const raha = Selector("#raha");
  const nappi = Selector("#nappi");
  const out = Selector("#out");
  const hluku = 1 + Math.floor(Math.random()*20);
  const rluku = hluku - 1;
  const hintaluku = hluku.toString();
  const rahaluku = rluku.toString();
  const ostoviesti = "Paastoa!\nRahaa taskussa " + rluku;

  await t
    .typeText('#hinta', hintaluku)
    .typeText('#raha', rahaluku)
    .click(nappi)
    .expect(out.innerText).eql(ostoviesti);
});

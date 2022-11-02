// Navegador
const navegacion = document.querySelector('.js-scroll');
window.addEventListener('scroll', function(){
    window.addEventListener('scroll', function(){
        navegacion.classList.toggle('active', window.scrollY >0)
    })
})


document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".articulo").forEach(fruta =>{
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
    }
  })

  const invisible = document.getElementById("botones");
  function inv(sw){
    const invisible = document.getElementById("botones");
    if (sw ==0){
        invisible.classList.add("filtro");}
    else{
        invisible.classList.remove("filtro")
    }
 }

//  funciones poppads

const h1 = document.getElementById('h1');
const modal_h1 = document.getElementById('modal_h1');
const h1close = document.getElementById('close_h1');
h1.addEventListener('click', () => {
    modal_h1.classList.add('show');  
});
h1close.addEventListener('click', () => {
    modal_h1.classList.remove('show');
});

const h = document.getElementById('h');
const modal_h = document.getElementById('modal_h');
const hclose = document.getElementById('close_h');
h.addEventListener('click', () => {
    modal_h.classList.add('show');  
});
hclose.addEventListener('click', () => {
    modal_h.classList.remove('show');
});


const h2 = document.getElementById('h2');
const modal_h2 = document.getElementById('modal_h2');
const h2close = document.getElementById('close_h2');
h2.addEventListener('click', () => {
    modal_h2.classList.add('show');  
});
h2close.addEventListener('click', () => {
    modal_h2.classList.remove('show');
});


const h3 = document.getElementById('h3');
const modal_container = document.getElementById('modal_h3');
const h3close = document.getElementById('close_h3');
h3.addEventListener('click', () => {
  modal_container.classList.add('show');  
});
h3close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

const h5 = document.getElementById('h5');
const modal_h5 = document.getElementById('modal_h5');
const h5close = document.getElementById('close_h5');
h5.addEventListener('click', () => {
    modal_h5.classList.add('show');  
});
h5close.addEventListener('click', () => {
    modal_h5.classList.remove('show');
});


const h6 = document.getElementById('h6');
const modal_h6 = document.getElementById('modal_h6');
const h6close = document.getElementById('close_h6');
h6.addEventListener('click', () => {
    modal_h6.classList.add('show');  
});
h6close.addEventListener('click', () => {
    modal_h6.classList.remove('show');
});


const o2 = document.getElementById('o2');
const modal_o2 = document.getElementById('modal_o2');
const o2close = document.getElementById('close_o2');
o2.addEventListener('click', () => {
    modal_o2.classList.add('show');  
});
o2close.addEventListener('click', () => {
    modal_o2.classList.remove('show');
});


const o5 = document.getElementById('o5');
const modal_o5 = document.getElementById('modal_o5');
const o5close = document.getElementById('close_o5');
o5.addEventListener('click', () => {
    modal_o5.classList.add('show');  
});
o5close.addEventListener('click', () => {
    modal_o5.classList.remove('show');
});


const o = document.getElementById('o');
const modal_o = document.getElementById('modal_o');
const oclose = document.getElementById('close_o');
o.addEventListener('click', () => {
    modal_o.classList.add('show');  
});
oclose.addEventListener('click', () => {
    modal_o.classList.remove('show');
});


const g = document.getElementById('g');
const modal_g = document.getElementById('modal_g');
const gclose = document.getElementById('close_g');
g.addEventListener('click', () => {
    modal_g.classList.add('show');  
});
gclose.addEventListener('click', () => {
    modal_g.classList.remove('show');
});


const g2 = document.getElementById('g2');
const modal_g2 = document.getElementById('modal_g2');
const g2close = document.getElementById('close_g2');
g2.addEventListener('click', () => {
    modal_g2.classList.add('show');  
});
g2close.addEventListener('click', () => {
    modal_g2.classList.remove('show');
});


const n = document.getElementById('n');
const modal_n = document.getElementById('modal_n');
const nclose = document.getElementById('close_n');
n.addEventListener('click', () => {
    modal_n.classList.add('show');  
});
nclose.addEventListener('click', () => {
    modal_n.classList.remove('show');
});


const d = document.getElementById('d');
const modal_d = document.getElementById('modal_d');
const dclose = document.getElementById('close_d');
d.addEventListener('click', () => {
    modal_d.classList.add('show');  
});
dclose.addEventListener('click', () => {
    modal_d.classList.remove('show');
});


const j = document.getElementById('j');
const modal_j = document.getElementById('modal_j');
const jclose = document.getElementById('close_j');
j.addEventListener('click', () => {
    modal_j.classList.add('show');  
});
jclose.addEventListener('click', () => {
    modal_j.classList.remove('show');
});


const k = document.getElementById('k');
const modal_k = document.getElementById('modal_k');
const kclose = document.getElementById('close_k');
k.addEventListener('click', () => {
    modal_k.classList.add('show');  
});
kclose.addEventListener('click', () => {
    modal_k.classList.remove('show');
});


const e = document.getElementById('e');
const modal_e = document.getElementById('modal_e');
const eclose = document.getElementById('close_e');
e.addEventListener('click', () => {
    modal_e.classList.add('show');  
});
eclose.addEventListener('click', () => {
    modal_e.classList.remove('show');
});


const c = document.getElementById('c');
const modal_c = document.getElementById('modal_c');
const cclose = document.getElementById('close_c');
c.addEventListener('click', () => {
    modal_c.classList.add('show');  
});
cclose.addEventListener('click', () => {
    modal_c.classList.remove('show');
});


const b = document.getElementById('b');
const modal_b = document.getElementById('modal_b');
const bclose = document.getElementById('close_b');
b.addEventListener('click', () => {
    modal_b.classList.add('show');  
});
bclose.addEventListener('click', () => {
    modal_b.classList.remove('show');
});


const a = document.getElementById('a');
const modal_a = document.getElementById('modal_a');
const aclose = document.getElementById('close_a');
a.addEventListener('click', () => {
    modal_a.classList.add('show');  
});
aclose.addEventListener('click', () => {
    modal_a.classList.remove('show');
});


const f = document.getElementById('f');
const modal_f = document.getElementById('modal_f');
const fclose = document.getElementById('close_f');
f.addEventListener('click', () => {
    modal_f.classList.add('show');  
});
fclose.addEventListener('click', () => {
    modal_f.classList.remove('show');
});


const m = document.getElementById('m');
const modal_m = document.getElementById('modal_m');
const mclose = document.getElementById('close_m');
m.addEventListener('click', () => {
    modal_m.classList.add('show');  
});
mclose.addEventListener('click', () => {
    modal_m.classList.remove('show');
});


const l = document.getElementById('l');
const modal_l = document.getElementById('modal_l');
const lclose = document.getElementById('close_l');
l.addEventListener('click', () => {
    modal_l.classList.add('show');  
});
lclose.addEventListener('click', () => {
    modal_l.classList.remove('show');
});


const z = document.getElementById('z');
const modal_z = document.getElementById('modal_z');
const zclose = document.getElementById('close_z');
z.addEventListener('click', () => {
    modal_z.classList.add('show');  
});
zclose.addEventListener('click', () => {
    modal_z.classList.remove('show');
});


const v = document.getElementById('v');
const modal_v = document.getElementById('modal_v');
const vclose = document.getElementById('close_v');
v.addEventListener('click', () => {
    modal_v.classList.add('show');  
});
vclose.addEventListener('click', () => {
    modal_v.classList.remove('show');
});


const x = document.getElementById('x');
const modal_x = document.getElementById('modal_x');
const xclose = document.getElementById('close_x');
x.addEventListener('click', () => {
    modal_x.classList.add('show');  
});
xclose.addEventListener('click', () => {
    modal_x.classList.remove('show');
});


const w = document.getElementById('w');
const modal_w = document.getElementById('modal_w');
const wclose = document.getElementById('close_w');
w.addEventListener('click', () => {
    modal_w.classList.add('show');  
});
wclose.addEventListener('click', () => {
    modal_w.classList.remove('show');
});


const q = document.getElementById('q');
const modal_q = document.getElementById('modal_q');
const qclose = document.getElementById('close_q');
q.addEventListener('click', () => {
    modal_q.classList.add('show');  
});
qclose.addEventListener('click', () => {
    modal_q.classList.remove('show');
});


const t = document.getElementById('t');
const modal_t = document.getElementById('modal_t');
const tclose = document.getElementById('close_t');
t.addEventListener('click', () => {
    modal_t.classList.add('show');  
});
tclose.addEventListener('click', () => {
    modal_t.classList.remove('show');
});


const r = document.getElementById('r');
const modal_r = document.getElementById('modal_r');
const rclose = document.getElementById('close_r');
r.addEventListener('click', () => {
    modal_r.classList.add('show');  
});
rclose.addEventListener('click', () => {
    modal_r.classList.remove('show');
});


const u = document.getElementById('u');
const modal_u = document.getElementById('modal_u');
const uclose = document.getElementById('close_u');
u.addEventListener('click', () => {
    modal_u.classList.add('show');  
});
uclose.addEventListener('click', () => {
    modal_u.classList.remove('show');
});


const s = document.getElementById('s');
const modal_s = document.getElementById('modal_s');
const sclose = document.getElementById('close_s');
s.addEventListener('click', () => {
    modal_s.classList.add('show');  
});
sclose.addEventListener('click', () => {
    modal_s.classList.remove('show');
});


const r2 = document.getElementById('r2');
const modal_r2 = document.getElementById('modal_r2');
const r2close = document.getElementById('close_r2');
r2.addEventListener('click', () => {
    modal_r2.classList.add('show');  
});
r2close.addEventListener('click', () => {
    modal_r2.classList.remove('show');
});


const q2 = document.getElementById('q2');
const modal_q2 = document.getElementById('modal_q2');
const q2close = document.getElementById('close_q2');
q2.addEventListener('click', () => {
    modal_q2.classList.add('show');  
});
q2close.addEventListener('click', () => {
    modal_q2.classList.remove('show');
});


const p = document.getElementById('p');
const modal_p = document.getElementById('modal_p');
const pclose = document.getElementById('close_p');
p.addEventListener('click', () => {
    modal_p.classList.add('show');  
});
pclose.addEventListener('click', () => {
    modal_p.classList.remove('show');
});


const f2 = document.getElementById('f2');
const modal_f2 = document.getElementById('modal_f2');
const f2close = document.getElementById('close_f2');
f2.addEventListener('click', () => {
    modal_f2.classList.add('show');  
});
f2close.addEventListener('click', () => {
    modal_f2.classList.remove('show');
});


const m2 = document.getElementById('m2');
const modal_m2 = document.getElementById('modal_m2');
const m2close = document.getElementById('close_m2');
m2.addEventListener('click', () => {
    modal_m2.classList.add('show');  
});
m2close.addEventListener('click', () => {
    modal_m2.classList.remove('show');
});


const x2 = document.getElementById('x2');
const modal_x2 = document.getElementById('modal_x2');
const x2close = document.getElementById('close_x2');
x2.addEventListener('click', () => {
    modal_x2.classList.add('show');  
});
x2close.addEventListener('click', () => {
    modal_x2.classList.remove('show');
});


const i = document.getElementById('i');
const modal_i = document.getElementById('modal_i');
const iclose = document.getElementById('close_i');
i.addEventListener('click', () => {
    modal_i.classList.add('show');  
});
iclose.addEventListener('click', () => {
    modal_i.classList.remove('show');
});
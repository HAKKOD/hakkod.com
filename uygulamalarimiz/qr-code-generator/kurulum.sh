#!/bin/zsh
# https://askubuntu.com/questions/435806/how-to-create-a-new-category-in-the-gnome-menu
clear
uygulamaninAdi="qr-code-generator"
uygulamaninGozukenAdi="QR Code Generator"
uygulamaninAciklamasi="Generate QR Code quickly and securely."

uygulamaninKonumu="/usr/bin/hakkod-${uygulamaninAdi}"
uygulamaURL="https://hakkod.com/uygulamalarimiz/$uygulamaninAdi"

yuzdeyiYazdir() {
    cubukSayisi=42
    karaliCubuksayisi="$(($1*$cubukSayisi/100))"
    ilerlemeCubugu=""
    for i in `seq 1 $karaliCubuksayisi`
    do
        ilerlemeCubugu+="▒"
    done
    for i in `seq 1 $((${cubukSayisi}-${karaliCubuksayisi}))`
    do
        ilerlemeCubugu+="░"
    done
    echo "${ilerlemeCubugu} %${1}"
}

kurulumAsamasiniGostert() {
    clear
    echo "HAKKOD - ${uygulamaninGozukenAdi}"
    echo "https://hakkod.com"
    echo "contact@hakkod.com"
    echo "────────────────────────────────────"
    echo "The installation will be completed in a few minutes.\n"
    yuzdeyiYazdir $1
}

kurulumAsamasiniGostert 20
# root kullanıcı hesabını kontrol et.
if [[ "$(whoami)" != "root" ]]; then
    printf "You must be in the root user account to run the installation.\nCurrent user account: $(whoami)"
    exit 1
fi

kurulumAsamasiniGostert 67
# Paket indirme kaynaklarını güncelle.
apt update -y >/dev/null 2>/dev/null

kurulumAsamasiniGostert 88
# Gerekli paketleri indir ve kur.
export DEBIAN_FRONTEND=noninteractive
apt install libgtk-3-0 libwebkit2gtk-4.0-37 -y >/dev/null 2>/dev/null

# Arama motoru için uygulamaları optimize et.
programlar=""
find "/usr/share/applications/" -maxdepth 1 -name "*.desktop" | cut -c25- > "/tmp/.ItwxMxnVAV5vr0OIkCnr"
programlarinSayisi="$(cat "/tmp/.ItwxMxnVAV5vr0OIkCnr" | wc -l)"
tarananProgramSayisi=0
while read dosya; do
    isimSayisi="$(cat /usr/share/applications/$dosya | grep -c "Name=")"
    if [[ $isimSayisi -gt 0 ]]; then
        cat /usr/share/applications/$dosya | grep "Name=" > "/tmp/.v6Mlzp8onHdnD7oOONXP"
        while read satir; do
            if [[ "$(echo $satir | cut -c1-5)" == "Name=" ]]; then
            programlar+="$(echo $satir | awk -F'=' '{print $2}');"
            tarananProgramSayisi="$((${tarananProgramSayisi}+1))";
            break;
            fi
        done < "/tmp/.v6Mlzp8onHdnD7oOONXP"
    fi
done < "/tmp/.ItwxMxnVAV5vr0OIkCnr"
rm "/tmp/.ItwxMxnVAV5vr0OIkCnr" "/tmp/.ItwxMxnVAV5vr0OIkCnr"

# Yüklenen uygulamaya ikon ekle ve arama çubuğu için optimize et. 
kurulumAsamasiniGostert 94
desktopDosyasi="[Desktop Entry]\n"
desktopDosyasi+="Name=HAKKOD - ${uygulamaninGozukenAdi}\n"
desktopDosyasi+="GenericName=HAKKOD - ${uygulamaninGozukenAdi}\n"
desktopDosyasi+="Comment=$uygulamaninAciklamasi\n"
desktopDosyasi+="Exec=hakkod-${uygulamaninAdi}\n"
desktopDosyasi+="Type=Application\n"
desktopDosyasi+="Icon=/usr/share/icons/hakkod/${uygulamaninAdi}.png\n"
desktopDosyasi+="StartupNotify=false\n"
desktopDosyasi+="Categories=HAKKOD;\n"
desktopDosyasi+="Keywords=hakkod;wifi;window;browser;cherrytree;mate;file;text;google;firefox;sql;internet;run;image;qwertyuopasdfghjklizxcvbnm0123456789;cmd;terminal;settings;power;color;qq;qw;qe;qr;qt;qy;qu;qo;qp;qa;qs;qd;qf;qg;qh;qj;qk;ql;qi;qz;qx;qc;qv;qb;qn;qm;wq;ww;we;wr;wt;wy;wu;wo;wp;wa;ws;wd;wf;wg;wh;wj;wk;wl;wi;wz;wx;wc;wv;wb;wn;wm;eq;ew;ee;er;et;ey;eu;eo;ep;ea;es;ed;ef;eg;eh;ej;ek;el;ei;ez;ex;ec;ev;eb;en;em;rq;rw;re;rr;rt;ry;ru;ro;rp;ra;rs;rd;rf;rg;rh;rj;rk;rl;ri;rz;rx;rc;rv;rb;rn;rm;tq;tw;te;tr;tt;ty;tu;to;tp;ta;ts;td;tf;tg;th;tj;tk;tl;ti;tz;tx;tc;tv;tb;tn;tm;yq;yw;ye;yr;yt;yy;yu;yo;yp;ya;ys;yd;yf;yg;yh;yj;yk;yl;yi;yz;yx;yc;yv;yb;yn;ym;uq;uw;ue;ur;ut;uy;uu;uo;up;ua;us;ud;uf;ug;uh;uj;uk;ul;ui;uz;ux;uc;uv;ub;un;um;oq;ow;oe;or;ot;oy;ou;oo;op;oa;os;od;of;og;oh;oj;ok;ol;oi;oz;ox;oc;ov;ob;on;om;pq;pw;pe;pr;pt;py;pu;po;pp;pa;ps;pd;pf;pg;ph;pj;pk;pl;pi;pz;px;pc;pv;pb;pn;pm;aq;aw;ae;ar;at;ay;au;ao;ap;aa;as;ad;af;ag;ah;aj;ak;al;ai;az;ax;ac;av;ab;an;am;sq;sw;se;sr;st;sy;su;so;sp;sa;ss;sd;sf;sg;sh;sj;sk;sl;si;sz;sx;sc;sv;sb;sn;sm;dq;dw;de;dr;dt;dy;du;do;dp;da;ds;dd;df;dg;dh;dj;dk;dl;di;dz;dx;dc;dv;db;dn;dm;fq;fw;fe;fr;ft;fy;fu;fo;fp;fa;fs;fd;ff;fg;fh;fj;fk;fl;fi;fz;fx;fc;fv;fb;fn;fm;gq;gw;ge;gr;gt;gy;gu;go;gp;ga;gs;gd;gf;gg;gh;gj;gk;gl;gi;gz;gx;gc;gv;gb;gn;gm;hq;hw;he;hr;ht;hy;hu;ho;hp;ha;hs;hd;hf;hg;hh;hj;hk;hl;hi;hz;hx;hc;hv;hb;hn;hm;jq;jw;je;jr;jt;jy;ju;jo;jp;ja;js;jd;jf;jg;jh;jj;jk;jl;ji;jz;jx;jc;jv;jb;jn;jm;kq;kw;ke;kr;kt;ky;ku;ko;kp;ka;ks;kd;kf;kg;kh;kj;kk;kl;ki;kz;kx;kc;kv;kb;kn;km;lq;lw;le;lr;lt;ly;lu;lo;lp;la;ls;ld;lf;lg;lh;lj;lk;ll;li;lz;lx;lc;lv;lb;ln;lm;iq;iw;ie;ir;it;iy;iu;io;ip;ia;is;id;if;ig;ih;ij;ik;il;ii;iz;ix;ic;iv;ib;in;im;zq;zw;ze;zr;zt;zy;zu;zo;zp;za;zs;zd;zf;zg;zh;zj;zk;zl;zi;zz;zx;zc;zv;zb;zn;zm;xq;xw;xe;xr;xt;xy;xu;xo;xp;xa;xs;xd;xf;xg;xh;xj;xk;xl;xi;xz;xx;xc;xv;xb;xn;xm;cq;cw;ce;cr;ct;cy;cu;co;cp;ca;cs;cd;cf;cg;ch;cj;ck;cl;ci;cz;cx;cc;cv;cb;cn;cm;vq;vw;ve;vr;vt;vy;vu;vo;vp;va;vs;vd;vf;vg;vh;vj;vk;vl;vi;vz;vx;vc;vv;vb;vn;vm;bq;bw;be;br;bt;by;bu;bo;bp;ba;bs;bd;bf;bg;bh;bj;bk;bl;bi;bz;bx;bc;bv;bb;bn;bm;nq;nw;ne;nr;nt;ny;nu;no;np;na;ns;nd;nf;ng;nh;nj;nk;nl;ni;nz;nx;nc;nv;nb;nn;nm;mq;mw;me;mr;mt;my;mu;mo;mp;ma;ms;md;mf;mg;mh;mj;mk;ml;mi;mz;mx;mc;mv;mb;mn;mm;$programlar\n"
echo -e "${desktopDosyasi}" > "/usr/share/applications/${uygulamaninAdi}.desktop"

# hakkod.com'un kısayol uygulamasına ikon ekle ve arama çubuğu için optimize et. 
desktopDosyasi="[Desktop Entry]\n"
desktopDosyasi+="Name=HAKKOD\n"
desktopDosyasi+="GenericName=HAKKOD\n"
desktopDosyasi+="Comment=HAKKOD.COM\n"
desktopDosyasi+="Exec=hakkod\n"
desktopDosyasi+="Type=Application\n"
desktopDosyasi+="Icon=/usr/share/icons/hakkod/hakkod.png\n"
desktopDosyasi+="StartupNotify=false\n"
desktopDosyasi+="Categories=HAKKOD;\n"
desktopDosyasi+="Keywords=hakkod;wifi;window;browser;cherrytree;mate;file;text;google;firefox;sql;internet;run;image;qwertyuopasdfghjklizxcvbnm0123456789;cmd;terminal;settings;power;color;qq;qw;qe;qr;qt;qy;qu;qo;qp;qa;qs;qd;qf;qg;qh;qj;qk;ql;qi;qz;qx;qc;qv;qb;qn;qm;wq;ww;we;wr;wt;wy;wu;wo;wp;wa;ws;wd;wf;wg;wh;wj;wk;wl;wi;wz;wx;wc;wv;wb;wn;wm;eq;ew;ee;er;et;ey;eu;eo;ep;ea;es;ed;ef;eg;eh;ej;ek;el;ei;ez;ex;ec;ev;eb;en;em;rq;rw;re;rr;rt;ry;ru;ro;rp;ra;rs;rd;rf;rg;rh;rj;rk;rl;ri;rz;rx;rc;rv;rb;rn;rm;tq;tw;te;tr;tt;ty;tu;to;tp;ta;ts;td;tf;tg;th;tj;tk;tl;ti;tz;tx;tc;tv;tb;tn;tm;yq;yw;ye;yr;yt;yy;yu;yo;yp;ya;ys;yd;yf;yg;yh;yj;yk;yl;yi;yz;yx;yc;yv;yb;yn;ym;uq;uw;ue;ur;ut;uy;uu;uo;up;ua;us;ud;uf;ug;uh;uj;uk;ul;ui;uz;ux;uc;uv;ub;un;um;oq;ow;oe;or;ot;oy;ou;oo;op;oa;os;od;of;og;oh;oj;ok;ol;oi;oz;ox;oc;ov;ob;on;om;pq;pw;pe;pr;pt;py;pu;po;pp;pa;ps;pd;pf;pg;ph;pj;pk;pl;pi;pz;px;pc;pv;pb;pn;pm;aq;aw;ae;ar;at;ay;au;ao;ap;aa;as;ad;af;ag;ah;aj;ak;al;ai;az;ax;ac;av;ab;an;am;sq;sw;se;sr;st;sy;su;so;sp;sa;ss;sd;sf;sg;sh;sj;sk;sl;si;sz;sx;sc;sv;sb;sn;sm;dq;dw;de;dr;dt;dy;du;do;dp;da;ds;dd;df;dg;dh;dj;dk;dl;di;dz;dx;dc;dv;db;dn;dm;fq;fw;fe;fr;ft;fy;fu;fo;fp;fa;fs;fd;ff;fg;fh;fj;fk;fl;fi;fz;fx;fc;fv;fb;fn;fm;gq;gw;ge;gr;gt;gy;gu;go;gp;ga;gs;gd;gf;gg;gh;gj;gk;gl;gi;gz;gx;gc;gv;gb;gn;gm;hq;hw;he;hr;ht;hy;hu;ho;hp;ha;hs;hd;hf;hg;hh;hj;hk;hl;hi;hz;hx;hc;hv;hb;hn;hm;jq;jw;je;jr;jt;jy;ju;jo;jp;ja;js;jd;jf;jg;jh;jj;jk;jl;ji;jz;jx;jc;jv;jb;jn;jm;kq;kw;ke;kr;kt;ky;ku;ko;kp;ka;ks;kd;kf;kg;kh;kj;kk;kl;ki;kz;kx;kc;kv;kb;kn;km;lq;lw;le;lr;lt;ly;lu;lo;lp;la;ls;ld;lf;lg;lh;lj;lk;ll;li;lz;lx;lc;lv;lb;ln;lm;iq;iw;ie;ir;it;iy;iu;io;ip;ia;is;id;if;ig;ih;ij;ik;il;ii;iz;ix;ic;iv;ib;in;im;zq;zw;ze;zr;zt;zy;zu;zo;zp;za;zs;zd;zf;zg;zh;zj;zk;zl;zi;zz;zx;zc;zv;zb;zn;zm;xq;xw;xe;xr;xt;xy;xu;xo;xp;xa;xs;xd;xf;xg;xh;xj;xk;xl;xi;xz;xx;xc;xv;xb;xn;xm;cq;cw;ce;cr;ct;cy;cu;co;cp;ca;cs;cd;cf;cg;ch;cj;ck;cl;ci;cz;cx;cc;cv;cb;cn;cm;vq;vw;ve;vr;vt;vy;vu;vo;vp;va;vs;vd;vf;vg;vh;vj;vk;vl;vi;vz;vx;vc;vv;vb;vn;vm;bq;bw;be;br;bt;by;bu;bo;bp;ba;bs;bd;bf;bg;bh;bj;bk;bl;bi;bz;bx;bc;bv;bb;bn;bm;nq;nw;ne;nr;nt;ny;nu;no;np;na;ns;nd;nf;ng;nh;nj;nk;nl;ni;nz;nx;nc;nv;nb;nn;nm;mq;mw;me;mr;mt;my;mu;mo;mp;ma;ms;md;mf;mg;mh;mj;mk;ml;mi;mz;mx;mc;mv;mb;mn;mm;$programlar\n"
echo -e "${desktopDosyasi}" > "/usr/share/applications/hakkod.desktop"

# Boş bir ikon klasörü oluştur.
if ! [ -d "/usr/share/icons/hakkod/" ]; then
    mkdir "/usr/share/icons/hakkod/"
fi

# Uygulamanın ikonunu indir.
wget "${uygulamaURL}/ikon.png" -O "/usr/share/icons/hakkod/${uygulamaninAdi}.png" >/dev/null 2>/dev/null

# Uygulamayı indir ve kur.
wget "${uygulamaURL}/linux.elf" -O $uygulamaninKonumu >/dev/null 2>/dev/null

# Uygulamayı kurulumun çalıştırıldığı dizine kopyala
cp $uygulamaninKonumu "./${uygulamaninGozukenAdi} - HAKKOD"

# Uygulamaya okuma ve çalıştırma yetkisi ver.
chmod 555 $uygulamaninKonumu

# Uygulamayı masaüstüne kopyala.
cp $uygulamaninKonumu "/root/Desktop/${uygulamaninGozukenAdi} - HAKKOD"

# hakkod.com'a kısayol oluşturmak için hakkod isminde uygulama oluştur.
wget "https://hakkod.com/uygulamalarimiz/hakkod-kisayol/linux.elf" -O "/usr/bin/hakkod" >/dev/null 2>/dev/null

# hakkod.com'un kısayoluna okuma ve çalıştırma yetkisi ver.
chmod 555 "/usr/bin/hakkod"

# hakkod.com'un kısayolunu masaüstüne ekle.
cp "/usr/bin/hakkod" "/root/Desktop/HAKKOD"

# hakkod.com'un kısayolunu kurulumun çalıştırıldığı dizine ekle.
cp "/usr/bin/hakkod" "./HAKKOD"

# HAKKOD'un ikonunu indir.
wget "https://hakkod.com/uygulamalarimiz/hakkod/ikon.png" -O "/usr/share/icons/hakkod/hakkod.png" >/dev/null 2>/dev/null

# / dizinine HAKKOD isminde klasör oluştur.
if ! [ -d "/HAKKOD/" ]; then
    mkdir "/HAKKOD/"
fi
chmod 555 "/HAKKOD/"

# /HAKKOD/ dizinine uygulamaları kopyala.
cp "/usr/bin/hakkod" "/HAKKOD/HAKKOD"
cp "${uygulamaninKonumu}" "/HAKKOD/${uygulamaninGozukenAdi} - HAKKOD"

kurulumAsamasiniGostert 100
echo "The application has been added to the desktop and search bar."
echo "You can also run the application with the command: hakkod-${uygulamaninAdi}"
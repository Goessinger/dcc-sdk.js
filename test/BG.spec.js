const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, signAndPack32, signAndPack45, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('BG', async () => {
  it('should verify BG_2DCode_raw_1', async () => {
    const HC1 = 'HC1:NCFOXN*TS0BI$ZDYSHIAL*ECH 8S02109+D3NDC3LE84DIJ99HE1:G4G5%ZVGZ7:ZH6I1%4J.$2TM9*OVHABVCNN95ZTM.KM7755QLQQ5%YQ+GOSSP8/R2$Q.DPVGOP/R  QH$R387-WR9KRN95U/3P+9TG90OARH97KM4HGZJK HGX2MR$CXGG0U2XW4UZ2 NVV5TN%2UP20J5/5LEBFD-48YI+T4D-4HRVUMNMD3323R13-Y6C-4A+2XEN QT QTHC31M3+E3CP456L X4CZKHKB-43.E3KD3OAJ5%IWZKRA38M7323Q05.$S3U2JKB%RBKD3ZQTVJJ$+LQ3QR$P*NIV1JHQE.7W.GLA$2ECJYGCB%GLF9$DF8PQ9Z2*HNA-5NINJ4A*PO5FKYYNJK1G%UJ441JA4JBDC9PAGYCHK4GBLEH-BB.BECH 9MD-HBO55*E12MWKP/HLIJL8JF8JF172V2I0XTWYLM$EJ%MMWB:GSTHS:DW3ZJ0MD$NRF1OS6UE4VO4PFWL:IN9$RR.535T+TCZVFGZVXJPI1EUO9VOF+XBNOSJ/E32V4 L:XMHB0WAWIUJ';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
  });

  it('should verify BG_2DCode_raw_2', async () => {
    const HC1 = 'HC1:NCFOXN*TS0BI$ZDYSHIAL*ECH 8S021091JDNDC3LE84DIJ9CIE7-78WA46VGOU:ZH6I1%4JF 2K%5PK9CZLEQ56SP.E5BQ95ZM3763LED6N%ZEXE6%HULAV**M82F93I6*6 %6PK9B/0MCIMMISVDG8C5DL-9C1QDW33C8C0U09B91*KEDC6J0GJ4JXGHHBIWB.80XUTKQS7DS2*N.SSBNKA.G.P6A8IM%OVNIA KZ*U0I1-I0*OC6H0UWM2NISGH*BSPRAFTI/T1A.PECGX%EN+P.Y0/9TL4T.B9GYPNIN:EWD QZQHU*PH86DROI%KXYNYKTKK1Y R/03YVBO7L.CCP7A+5S*T08JFHAIN95+Y5 P4KDO+*OH:7SA7G6MS/5U*O3DRE6P6/QVHPOVQJT5FT5D75W9AV88G64KE809KV+EYMOL61I/JTYJJP66IL/XCBJBJ3DJGOBIG2%5AM4T/JKATN5NN7TA9QB.PY38PMKIQJ8:P-TVS L$W8LOAFXUWWLP-RO1E550%/OE5';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
  });

  it('should verify BG_2DCode_raw_3', async () => {
    const HC1 = 'HC1:NCFOXN*TS0BI$ZDYSHIAL*ECH 8S021092LHNDC3LE84DIJ9917QFG4G5T3E3QGNO4*J8OX4W$C2VLWLI3K5YO9OUUMK9WLIK*L5R1G$J3:LD:RNH8$S9ZPKBTOAV7I%BXYHH+H:PIWEGLS47%S%*48YIZ73423ZQT+EJDG35:4UZ2 NVV5TN%2UP20J5/5LEBFD-48YI+T4D-4HRVUMNMD3323R1370RC-4A+2XEN QT QTHC31M3+E3CP456L X4CZKHKB-43.E3KD3OAJ5%IWZKRA38M7323Q05.$S6ZC0JBV63MD3I708999Q9E$BDZIU6JLGCE*GO:2G504C062KLZIX2BAGCB%GV-2YVBTULBH5 ZJ83BV+3UEUJ14V:3:ZJ83B.VSR8T11D:I2UM97H98$QJEQ8BH3HUXNU33OTWVNPBO/DWBAFYN JVG O3 TRXE$LKJRH6THHYAA/E5ON7DQXPA:Y48UF:ZI2KI-2J09MYO9YUVZ.Q:4SG:FUVN8UL*TNI10Z$121';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
  });

  it('should verify BG_2DCode_raw_4', async () => {
    const HC1 = 'HC1:NCFOXN*TS0BI$ZDYSHIAL*ECH 8S02109VRUNDC3LE84D9I9W5JI9CRK9KEELDM:UC*GPXS4BDL8FF KE %G6EDX0KEEDAMEN+IAJKJUI9+IZYKHDJ:SJ/YKWZKTDJ1JJL7II C-JEAGQC K:YM8J4RK46YB8L46P8C KHHA39QHCR:36G*L:%5J9C.XIKXB8UJ06J9UBSVAXCIF4LEIIPBJ NI5VA81K0ECM8CXVDC8C 1J5OI9YI:8DL:D%PDB2M+9D$ZJ*DJWP42W5/DUWWJ QHX*P786OQO:M1H%5SH9IBQD9AB86QQOPL13:5US0N16586VPO7T0G2FS52LX0F$G1%A1FDUZ4L4O$.FJF8DGC9NTKX4:ECQ-7O.FT1KG+6+A4/:FHJO.MQT*QGTA4W7.Y7N31QL4W-IF.S4/7G*BDSPEHFS-6Z.A0AAJ3OX1H-8L8 GDJJCZ1/WRUM3$HSTLF3XBF6IMHCYG8YBT8WMU.N2WA:%LAZSZXP0FVZJC+*8HB0M1A-HI';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
  });

});

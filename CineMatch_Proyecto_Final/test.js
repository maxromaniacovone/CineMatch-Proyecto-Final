const {test}=require('node:test');const assert=require('node:assert/strict');const {recommend}=require('./server');
test('recomienda contenidos sin historial',()=>{const u={id:'1',edad:18,generos:['Acción']};const out=recommend(u,{historial:[]});assert.ok(out.length>0);assert.ok(out.every(x=>x.edad<=18))});
test('excluye contenido visto',()=>{const u={id:'1',edad:18,generos:[]};const out=recommend(u,{historial:[{userId:'1',contenidoId:1}]});assert.ok(!out.some(x=>x.id===1))});
test('filtra contenido por edad',()=>{const u={id:'1',edad:10,generos:[]};const out=recommend(u,{historial:[]});assert.ok(out.every(x=>x.edad<=10))});

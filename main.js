function main() {
    var canvas = document.getElementById("mycanvas");
    var gl = canvas.getContext("webgl");
  
    // Definisi data verteks 3 buah titik
    /**
     * Titik A (-0.5, -0.5)
     * Titik B ( 0.5, -0.5)
     * Titik C ( 0.5,  0.5)
     * Titik D (-0.5,  0.5)
     */
    var vertices = [
      //grafkom kemaren
      // -0.5, -0.5, 1.0, 0.0, 0.0,      // Titik A, MERAH, nentuin warna dari rgb
      // 0.5, -0.5, 0.0, 1.0, 0.0,       // Titik B, HIJAU
      // 0.5, 0.5, 0.0, 0.0, 1.0,        // Titik C, BIRU
      // -0.5, -0.5, 1.0, 1.0, 1.0,      // Titik A, PUTIH
      // 0.5, 0.5, 1.0, 1.0, 1.0,        // Titik C, PUTIH
      // -0.5, 0.5, 1.0, 1.0, 1.0        // Titik D, PUTIH

      //tugas
      //angka 1
      -0.5, 0.3, 1.0, 1.0, 1.0, //point H
      -0.5, 0.8, 1.0, 1.0, 1.0, //point A
      -0.4, 0.8, 1.0, 1.0, 1.0, //point D
      -0.4, 0.3, 1.0, 1.0, 1.0, //point F
      
      
      //angka 5
      -0.1, 0.3, 1.0, 0.0, 0.0, //n
      0.1603354363249, 0.3020444457542, 1.0, 0.0, 0.0, //f1
      0.2010744318123, 0.3392409198949, 1.0, 0, 0, //g1
      0.1993031711389, 0.5606485040655, 1.0, 0, 0, //m
      0.1638779576717, 0.6013874995529, 1.0, 0, 0, //i
      0.0, 0.6, 1.0, 0, 0, //o
      0.0, 0.7, 1.0, 1.0, 1.0, //j
      0.2, 0.7, 1.0, 1.0, 1.0, //p
      0.2, 0.8, 1.0, 1.0, 1.0, //c
      -0.062843408519, 0.7997686949697, 1.0, 1.0, 1.0, //e
      -0.0982686219863, 0.7608009601557, 1.0, 1.0, 1.0, //h1
      -0.1, 0.5, 1.0, 1, 1,//k
      0.1, 0.5, 1.0, 0, 0, //r
      0.1, 0.4, 1.0, 0, 0, //t
      -0.1, 0.4, 1.0, 0, 0, //s

      //angka 7
      0.6190919507264, 0.3020444457542, 1.0, 1.0, 1.0, //d1
      0.7200538091082, 0.3020444457542, 1.0, 1.0, 1.0, //e1
      0.7590215439222, 0.5021969018444, 1.0, 1.0, 1.0, //c1
      0.7788773760706, 0.6048591704727, 1.0, 1.0, 1.0, //a1
      0.8006488266373, 0.6944238520517, 1.0, 1.0, 1.0, //w
      0.8, 0.7, 1.0, 1.0, 1.0, //n2
      0.8, 0.76, 1.0, 1.0, 1.0, //v
      0.76, 0.8, 1.0, 1.0, 1.0, //l
      0.5, 0.8, 1.0, 1.0, 1.0, //b
      0.5, 0.74, 1.0, 1.0, 1.0, //o2
      0.54, 0.7, 1.0, 1.0, 1.0, //g
      0.7, 0.7, 1.0, 1.0, 1.0, //u
      0.6796867783622, 0.6030879097993, 1.0, 1.0, 1.0, //q
      0.6580596855404, 0.5004256411711, 1.0, 1.0, 1.0, //z
      0.6385758181334, 0.4012350434626, 1.0, 1.0, 1.0, //b1

      /*        huruf          */
      //huruf p1
      -0.455, -0.8, 1.0, 1.0, 1.0, //z1
      -0.355, -0.8, 1.0, 1.0, 1.0, //w1
      -0.355, -0.602, 1.0, 1.0, 1.0, //f2
      //huruf p2
      -0.455, -0.8, 1.0, 1.0, 1.0, //z1
      -0.355, -0.602, 1.0, 1.0, 1.0, //f2
      -0.355, -0.552, 1.0, 1.0, 1.0, //g2
      //huruf p3
      -0.455, -0.8, 1.0, 1.0, 1.0, //z1
      -0.355, -0.552, 1.0, 1.0, 1.0, //g2
      -0.455, -0.202, 1.0, 1.0, 1.0,//a2
      //huruf p4
      -0.455, -0.202, 1.0, 1.0, 1.0, //a2
      -0.355, -0.552, 1.0, 1.0, 1.0, //g2
      -0.355, -0.452, 1.0, 1.0, 1.0, //i2
      //huruf p5
      -0.455, -0.202, 1.0, 1.0, 1.0, //a2
      -0.355, -0.452, 1.0, 1.0, 1.0, //i2
      -0.355, -0.275, 1.0, 1.0, 1.0,// h2

      //huruf p6
      -0.455, -0.202, 1.0, 1.0, 1.0, //a2
      -0.246, -0.275, 1.0, 1.0, 1.0, //k2
      -0.355, -0.275, 1.0, 1.0, 1.0,// h2
      //huruf p7
      -0.455, -0.202, 1.0, 1.0, 1.0, //a2
      -0.246, -0.275, 1.0, 1.0, 1.0, //k2
      -0.155, -0.202, 1.0, 1.0, 1.0, //b2
      //huruf p8
      -0.246, -0.275, 1.0, 1.0, 1.0, //k2
      -0.155, -0.202, 1.0, 1.0, 1.0, //b2
      -0.205, -0.302, 1.0, 1.0, 1.0, //l2
      //huruf p9
      -0.155, -0.202, 1.0, 1.0, 1.0, //b2
      -0.205, -0.302, 1.0, 1.0, 1.0, //l2
      -0.105, -0.302, 1.0, 1.0, 1.0, //c2
      //huruf p10
      -0.205, -0.302, 1.0, 1.0, 1.0, //l2
      -0.205, -0.402, 1.0, 1.0, 1.0, //j2
      -0.105, -0.302, 1.0, 1.0, 1.0, //c2
      //huruf p11
      -0.205, -0.402, 1.0, 1.0, 1.0, //j2
      -0.105, -0.302, 1.0, 1.0, 1.0, //c2
      -0.105, -0.402, 1.0, 1.0, 1.0, //d2
      //huruf p12
      -0.205, -0.402, 1.0, 1.0, 1.0, //j2
      -0.105, -0.402, 1.0, 1.0, 1.0, //d2
      -0.155, -0.502, 1.0, 1.0, 1.0, //e2
      //huruf p13
      -0.205, -0.402, 1.0, 1.0, 1.0, //j2
      -0.245, -0.429, 1.0, 1.0, 1.0, //m2
      -0.155, -0.502, 1.0, 1.0, 1.0, //e2
      //huruf p14
      -0.245, -0.429, 1.0, 1.0, 1.0, //m2
      -0.155, -0.502, 1.0, 1.0, 1.0, //e2
      -0.355, -0.552, 1.0, 1.0, 1.0, //g2
      //huruf p15
      -0.245, -0.429, 1.0, 1.0, 1.0, //m2
      -0.355, -0.452, 1.0, 1.0, 1.0, //i2
      -0.355, -0.552, 1.0, 1.0, 1., //g2
      //huruf a1
      0.18, -0.8, 1.0, 1.0, 1.0, //a
      0.33, -0.6, 1.0, 1.0, 1.0, //e
      0.28, -0.8, 1.0, 1.0, 1.0, //c
      //a2
      0.18, -0.8, 1.0, 1.0, 1.0, //a
      0.33, -0.6, 1.0, 1.0, 1.0, //e
      0.26, -0.48, 1.0, 1.0, 1.0,//d
      //a3
      0.26, -0.48, 1.0, 1.0, 1.0, //d
      0.33, -0.6, 1.0, 1.0, 1.0, //e
      0.35, -0.5, 1.0, 1.0, 1.0,//f
      //a4
      0.33, -0.6, 1.0, 1.0, 1.0, //e
      0.35, -0.5, 1.0, 1.0, 1.0, //f
      0.45, -0.5, 1.0, 1.0, 1.0, //l
      //a5
      0.33, -0.6, 1.0, 1.0, 1.0, //e
      0.45, -0.5, 1.0, 1.0, 1.0, //l
      0.47, -0.6, 1.0, 1.0, 1.0,// h

      //a6
      0.26, -0.48, 1.0, 1.0, 1.0, //d
      0.35, -0.5, 1.0, 1.0, 1.0, //f
      0.32, -0.202, 1.0, 1.0, 1.0,// b
      //a7
      0.32, -0.202, 1.0, 1.0, 1.0, //b
      0.385, -0.32, 1.0, 1.0, 1.0, //m
      0.35, -0.5, 1.0, 1.0, 1.0, //f
      //a8
      0.32, -0.202, 1.0, 1.0, 1.0, //b
      0.385, -0.32, 1.0, 1.0, 1.0, //m
      0.415, -0.32, 1.0, 1.0, 1.0, //n
      //a9
      0.32, -0.202, 1.0, 1.0, 1.0, //b
      0.475, -0.202, 1.0, 1.0, 1.0, //k
      0.415, -0.32, 1.0, 1.0, 1.0, //n
      //a10
      0.475, -0.202, 1.0, 1.0, 1.0, //k
      0.415, -0.32, 1.0, 1.0, 1.0, //n
      0.45, -0.5, 1.0, 1.0, 1.0, //l
      //a11
      0.475, -0.202, 1.0, 1.0, 1.0, //k
      0.45, -0.5, 1.0, 1.0, 1.0, //l
      0.54, -0.48, 1.0, 1.0, 1.0, //i
      //a12
      0.45, -0.5, 1.0, 1.0, 1.0, //l
      0.54, -0.48, 1.0, 1.0, 1.0, //i
      0.47, -0.6, 1.0, 1.0, 1.0,// h
      //a13
      0.47, -0.6, 1.0, 1.0, 1.0,// h
      0.62, -0.8, 1.0, 1.0, 1.0, //j
      0.54, -0.48, 1.0, 1.0, 1.0, //i
      //a14
      0.47, -0.6, 1.0, 1.0, 1.0,// h
      0.62, -0.8, 1.0, 1.0, 1.0, //j
      0.52, -0.8, 1.0, 1.0, 1.0 //g
    ];
  
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  
    var vertexShaderSource = document.getElementById("vertexShaderSource").text;
    var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;
  
    // Buat .c di GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
  
    // Kompilasi .c agar menjadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
    // Siapkan wadah untuk .exe (shader program)
    var shaderProgram = gl.createProgram();
  
    // Masukkan .o ke dalam wadah .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    // Sambungkan antar .o agar bisa menjadi
    //    runnable context di dalam wadah .exe tadi
    gl.linkProgram(shaderProgram);
  
    // Mulai menggunakan konteks (cat)
    gl.useProgram(shaderProgram);
  
    // Ajarkan attribute a_Position di GPU
    //  tentang pengambilan data verteks dari ARRAY_BUFFER
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
    var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
    gl.vertexAttribPointer(
      aPositionLoc, 
      2, 
      gl.FLOAT, 
      false, 
      5 * Float32Array.BYTES_PER_ELEMENT, 
      0);
    gl.vertexAttribPointer(
      aColorLoc, 
      3, 
      gl.FLOAT, 
      false, 
      5 * Float32Array.BYTES_PER_ELEMENT, 
      2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aPositionLoc);
    gl.enableVertexAttribArray(aColorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(100, 0, canvas.height, canvas.height);
      //grafkomkemarin
    // var primitive = gl.TRIANGLES;
    // var offset = 0;
    // var nVertex = 6;
    // gl.drawArrays(primitive, offset, nVertex);

    // angka 1
    var primitive = gl.LINE_LOOP;
    offset = 0;
    nVertex = 4;
    gl.drawArrays(primitive, offset, nVertex);  

    //angka 5
    var primitive = gl.LINE_LOOP;
    offset += nVertex;
    nVertex = 15;
    gl.drawArrays(primitive, offset, nVertex);  

    //angka 7
    var primitive = gl.LINE_LOOP;
    offset += nVertex;
    nVertex = 15;
    gl.drawArrays(primitive, offset, nVertex);  

    // p1
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p2
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p3
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p4
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p5
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p6
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p7
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p8
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p9
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p10
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p11
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p12
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p13
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p14
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // p15
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    //A1
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A2
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A3
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A4
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A5
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A6
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A7
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A8
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    //A9
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // A10
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // A11
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // A12
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // A13
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    // A14
    var primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
    
  }
      
   //bikin balok itu dari bentuk2 segitiga (triangle_fan)
   //canvas berpengaruh dengan hasil dari drawarrays ini(cara 1)
   //pakai viewport untuk mengubah hasil dari drawarrays(cara 2)
   //triangle fan titik awalnya sama
   //triangle strip titik awal selanjtunya di increment 1 dari titik awal


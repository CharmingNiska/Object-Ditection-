img = "";

function preload()
{
 img = loadImage('BTS-World.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#409CED");
    text("RAP MONSTER", 45, 75);
    notFill();
    stroke("#409CED");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("JUNGKOOK",   );
    notFill();
    stroke("#60188B");
    rect();

    fill("#F59EDB");
    text("JIN",);
    notFill();
    stroke("#F59EDB");
    rect();

    fill("#BE211E");
    text("J-HOPE", );
    notFill();
    stroke("#BE211E");
    rect();

    fill("#000000");
    text("SUGA", );
    notFill();
    stroke("#000000");
    rect();

    fill("#FFD700");
    text("JIMIN", );
    notFill();
    stroke("#FFD700");
    rect();



    fill("#168834");
    text("TAE-HYUNG", );
    notFill();
    stroke("#168834");
    rect();

    

}
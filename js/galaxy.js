const music = document.getElementById("music");
music.play().catch(()=>{});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,innerWidth/innerHeight,1,3000);
camera.position.z = 400;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera,renderer.domElement);

const starGeo = new THREE.BufferGeometry();
const pos=[];
for(let i=0;i<12000;i++){
    pos.push(
        (Math.random()-0.5)*2000,
        (Math.random()-0.5)*2000,
        (Math.random()-0.5)*2000
    );
}
starGeo.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));
const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({color:0xffffff,size:2})
);
scene.add(stars);

function animate(){
    requestAnimationFrame(animate);
    stars.rotation.y+=0.0008;
    renderer.render(scene,camera);
}
animate();

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import EventEmitter from "./EventEmitter";
export default class ToolsShoe extends EventEmitter {
    constructor() {
        super();
        this.setCanvas()
        this.setSize()
        this.setScene()
        this.setCamera()
        this.setLights()
        this.setModele()
        this.setRenderer()
        this.setFloor()
        this.setAnimate()

    }
    setCanvas(){
        this.canvas = document.querySelector('canvas.webgl')
        console.log('test go')


    }
    setModele(){
        const TRAY = document.querySelector(".js-tray-slide");
        var activeOption = 'Chaussure';
        const colors = [

            {
                color: 'FAFF00' },

            {
                color: '7B61FF' },

            {
                color: '00FFE0' },

            {
                color: 'D22F87' },

            {
                color: '10C600' },

            {
                color: 'FE620B' },

            {
                color: '586157' },

            {
                color: '0443A0' },

            {
                color: 'A50808' },

            {
                color: '411053' },

            {
                color: 'FFFFFF' },

            {
                color: '637160' },

            {
                color: '000000' },
            {
                texture: 'img/motif_1.jpg',
                size: [1, 1, 1],
                shininess: 60 },

            {
                texture: 'img/motif_2.jpg',
                size: [4, 4, 4],
                shininess: 60 },

            {
                texture: 'img/motif_3.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_4.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_5.jpg',
                size: [2, 2, 2],
                shininess: 60 },

            {
                texture: 'img/motif_6.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_7.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_8.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_9.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_10.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_11.jpg',
                size: [3, 3, 3],
                shininess: 60 },

            {
                texture: 'img/motif_12.jpg',
                size: [3, 3, 3],
                shininess: 60 },
            {
                texture: 'img/texture_1.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_2.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_3.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_4.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_5.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_6.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_7.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_8.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_9.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_10.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_11.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_12.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/texture_13.jpg',
                size: [2, 2, 2],
                shininess: 60 },
            {
                texture: 'img/logo_.jpg',
                size: [1, 1, 1],
                shininess: 60 },

        ];
// Initial material
        const INITIAL_MTL = new THREE.MeshPhongMaterial({ color: 0xf1f1f1, shininess: 10 });
        const INITIAL_MAP = [
            { childID: "semelle", mtl: INITIAL_MTL },
            { childID: "logo", mtl: INITIAL_MTL },
            { childID: "languette", mtl: INITIAL_MTL },
            { childID: "lacet", mtl: INITIAL_MTL },
            { childID: "doublure", mtl: INITIAL_MTL },
            { childID: "Chaussure", mtl: INITIAL_MTL },
            { childID: "bordureLogo", mtl: INITIAL_MTL },
            { childID: "bordure", mtl: INITIAL_MTL },

        ];

        console.log('un initial',INITIAL_MAP)


        const loader = new ColladaLoader()


        loader.load(
            '/ok.dae',
            (dae) => {
                var theModel;
                theModel = dae.scene;
                theModel.scale.set(.025, .025, .025);

                // initialisation de la textures
                for (let object of INITIAL_MAP) {
                    initColor(theModel, object.childID, object.mtl);
                }

                this.scene.add(theModel);

                let root = dae.scene;
                root.background = new THREE.Color('red')
                console.log('je teste',root)

                // Ajouter la texture sur le model
                function initColor(parent, type, mtl) {
                    parent.traverse(o => {
                        if (o.isMesh) {
                            if (o.name.includes(type)) {
                                o.material = mtl;
                                o.nameID = type; // Set a new property to identify this object
                            }
                        }
                    });
                }

                // Function - New resizing method
                function resizeRendererToDisplaySize(renderer) {
                    const canvas = renderer.domElement;
                    var width = window.innerWidth;
                    var height = window.innerHeight;
                    var canvasPixelWidth = canvas.width / window.devicePixelRatio;
                    var canvasPixelHeight = canvas.height / window.devicePixelRatio;

                    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
                    if (needResize) {

                        renderer.setSize(width, height, false);
                    }
                    return needResize;
                }

                function buildColors(colors) {
                    for (let [i, color] of colors.entries()) {
                        let swatch = document.createElement('div');
                        swatch.classList.add('tray__swatch');

                        if (color.texture)
                        {
                            swatch.style.backgroundImage = "url(" + color.texture + ")";
                        } else
                        {
                            swatch.style.background = "#" + color.color;
                        }

                        swatch.setAttribute('data-key', i);
                        TRAY.append(swatch);
                    }
                }
                buildColors(colors);

                // Select Option
                const options = document.querySelectorAll(".option");
                for (const option of options) {
                    option.addEventListener('click', selectOption);
                }

                function selectOption(e) {
                    let option = e.target;
                    activeOption = e.target.dataset.option;
                    for (const otherOption of options) {
                        otherOption.classList.remove('--is-active');
                    }
                    option.classList.add('--is-active');
                }

// Swatches
                const swatches = document.querySelectorAll(".tray__swatch");

                for (const swatch of swatches) {
                    swatch.addEventListener('click', selectSwatch);
                }

                function selectSwatch(e) {
                    let color = colors[parseInt(e.target.dataset.key)];
                    let new_mtl;

                    if (color.texture) {

                        let txt = new THREE.TextureLoader().load(color.texture);

                        txt.repeat.set(color.size[0], color.size[1], color.size[2]);
                        txt.wrapS = THREE.RepeatWrapping;
                        txt.wrapT = THREE.RepeatWrapping;

                        new_mtl = new THREE.MeshPhongMaterial({
                            map: txt,
                            shininess: color.shininess ? color.shininess : 10 });

                    } else

                    {
                        new_mtl = new THREE.MeshPhongMaterial({
                            color: parseInt('0x' + color.color),
                            shininess: color.shininess ? color.shininess : 10 });


                    }

                    setMaterial(theModel, activeOption, new_mtl);
                }

                function setMaterial(parent, type, mtl) {
                    parent.traverse(o => {
                        if (o.isMesh && o.nameID != null) {
                            if (o.nameID == type) {
                                o.material = mtl;
                            }
                        }
                    });
                }


            }
        );
    }

    setScene() {

        this.scene = new THREE.Scene()

    }
    setFloor() {
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(1600, 1600),
            new THREE.MeshStandardMaterial({
                color: '#FFF',
                metalness: 0,
                roughness: 2,

            })
        )
        floor.rotation.x = -0.5 * Math.PI;
        floor.receiveShadow = true;
        floor.position.y = -1;
        this.scene.add(floor);
    }
    setLights(){

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.62)
        this.scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff,  0.7)

        directionalLight.castShadow = false
        directionalLight.shadow.mapSize.set(1024, 1024)
        directionalLight.position.set(- 5, 5, 5)
        this.scene.add(directionalLight)

    }
    setSize(){
        this.sizes = {
            width: this.canvas.getBoundingClientRect().width,
            height: this.canvas.getBoundingClientRect().height
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes à enlever
            this.sizes.width = window.innerWidth
            this.sizes.height = window.innerHeight

            //screen


            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
    }
    setCamera(){
        this.camera = new THREE.PerspectiveCamera(3.4, this.sizes.width / this.sizes.height, 1, 70000)
        this.camera.position.set(10, 2, 5)
        this.scene.add(this.camera)

        // Controls
        this.controls = new OrbitControls(this.camera, this.canvas)
        this.controls.target.set(-0.2, 0.1, 0)
        this.controls.enableDamping = true

    }
    setRenderer(){
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            canvas: this.canvas
        })

        this.renderer.setClearColor( 0xffffff, 1),
            this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 10))
    }
    setAnimate(){

        const tick = () =>
        {
            // Update controls
            this.controls.update()

            // etat de l'interface
            // changer les textures
            // let v=document.getElementById('MaterialFBXASC032FBXASC035166').value;
            //  console.log("l'élément est la", v);
            //if (v!=this.currentCat) {
            // Render

            this.renderer.render(this.scene, this.camera)
            // Call tick again on the next frame
            window.requestAnimationFrame(tick)




        }
        tick()

    }

    setsnapshot() {
        this.base64 = this.$refs.theModel.renderer.domElement.toDataURL('image/png', 1);
    }



}

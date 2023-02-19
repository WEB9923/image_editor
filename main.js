const saturate = document.getElementById('saturate');
const contrast = document.getElementById('contrast');
const brightness = document.getElementById('brightness');
const sepia = document.getElementById('sepia');
const grayscale = document.getElementById('grayscale');
const blur = document.getElementById('blur');
const hue_rotate = document.getElementById('hue-rotate');

const uploadBtn = document.getElementById('upload');
const downloadBtn = document.getElementById('download');
const resetBtn = document.getElementById('reset');

const img = document.getElementById('img');
const imgBox = document.querySelector('.img-box');

window.onload = function() {
    downloadBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    imgBox.style.display = 'none'
}
function resetValues() {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value ='100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hue_rotate.value = '0';
};

uploadBtn.addEventListener('change', () => {
    downloadBtn.style.display = 'flex';
    resetBtn.style.display = 'flex';
    imgBox.style.display = 'flex';

    let file = new FileReader();
    file.readAsDataURL(uploadBtn.files[0]);
    file.onload = () => {
        img.src = file.result;
    };
    resetValues();
});

resetBtn.addEventListener('click', resetValues);

let filters = document.querySelectorAll('ul li input');
filters.forEach(filter => {
    filter.addEventListener('input', () => {
        img.style.filter =
            `
                saturate(${saturate.value}%)
                contrast(${contrast.value}%)
                brightness(${brightness.value}%)
                sepia(${sepia.value}%)
                grayscale(${grayscale.value})
                blur(${blur.value}px)
                hue-rotate(${hue_rotate.value}deg)
            `;
    });
});

downloadBtn.addEventListener('click', () => {
    downloadBtn.href = img.src;
});


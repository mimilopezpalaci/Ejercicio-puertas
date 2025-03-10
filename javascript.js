document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(input => {
        input.addEventListener('change', updateResults);
    });
    
    function updateResults() {
        const value1 = document.getElementById('value1').checked;
        const value2 = document.getElementById('value2').checked;
        
        document.getElementById('andResult').textContent = value1 && value2 ? 'True' : 'False';
        document.getElementById('orResult').textContent = value1 || value2 ? 'True' : 'False';
        document.getElementById('xorResult').textContent = value1 !== value2 ? 'True' : 'False';
    }
});

$(document).ready(function() {
    $('#button').click(function() {
         fetch('expression.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                 $('#expression').text(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});

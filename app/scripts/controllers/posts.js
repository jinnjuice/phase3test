'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
    $scope.posts = Post.all;

    $scope.post = {person: 'Name', 'response': ''};

    $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
            $scope.post = {person: 'Name', 'response': ''};
        });
    };

    $scope.deletePost = function (postId) {
        Post.delete(postId);
    };

});
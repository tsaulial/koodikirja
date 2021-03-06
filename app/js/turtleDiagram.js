define(["whenInView", "turtle", "lodash", "jquery"], function(whenInView, Turtle) {
  $(function() {
    var turtleDiagrams = {
      suunnat1: {
        offsetY: 50,
        commands: [["rt",[0]],["fd",[120]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["rt",[0]],["fd",[20]],["lt",[0]],["pendown",[]],["text",["FD 100"]],["penup",[]],["rt",[180]],["fd",[140]],["lt",[180]],["pendown",[]],["rt",[90]],["fd",[120]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[90]],["penup",[]],["rt",[0]],["fd",[20]],["lt",[0]],["pendown",[]],["text",["RT 90"]],["penup",[]],["rt",[180]],["fd",[20]],["rt",[90]],["fd",[120]],["pendown",[]],["rt",[0]],["fd",[120]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["rt",[90]],["penup",[]],["rt",[0]],["fd",[20]],["lt",[0]],["pendown",[]],["text",["LT 90"]],["penup",[]],["rt",[180]],["fd",[20]],["lt",[180]],["pendown",[]],["penup",[]],["rt",[90]],["fd",[120]],["lt",[90]],["pendown",[]]]
      },
      suunnat2: {
        commands: [["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[0]],["penup",[]],["rt",[90]],["fd",[10]],["lt",[90]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",[""]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["rt",[0]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[45]],["penup",[]],["rt",[135]],["fd",[10]],["lt",[135]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["RT 45"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[315]],["fd",[10]],["lt",[315]],["pendown",[]],["rt",[45]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[90]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["RT 90"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[360]],["fd",[10]],["lt",[360]],["pendown",[]],["rt",[90]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[135]],["penup",[]],["rt",[225]],["fd",[10]],["lt",[225]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["RT 135"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[405]],["fd",[10]],["lt",[405]],["pendown",[]],["rt",[135]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[180]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["RT 180"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["rt",[180]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[225]],["penup",[]],["rt",[315]],["fd",[10]],["lt",[315]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["LT 135"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[495]],["fd",[10]],["lt",[495]],["pendown",[]],["rt",[225]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[270]],["penup",[]],["rt",[360]],["fd",[10]],["lt",[360]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["LT 90"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[540]],["fd",[10]],["lt",[540]],["pendown",[]],["rt",[270]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]],["rt",[0]],["fd",[200]],["rt",[135]],["fd",[10]],["rt",[180]],["penup",[]],["fd",[10]],["lt",[90]],["pendown",[]],["fd",[10]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[45]],["pendown",[]],["lt",[0]],["penup",[]],["fd",[20]],["lt",[315]],["penup",[]],["rt",[405]],["fd",[10]],["lt",[405]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[10]],["lt",[270]],["pendown",[]],["text",["LT 45"]],["penup",[]],["rt",[450]],["fd",[10]],["lt",[450]],["pendown",[]],["penup",[]],["rt",[585]],["fd",[10]],["lt",[585]],["pendown",[]],["rt",[315]],["penup",[]],["rt",[180]],["fd",[220]],["lt",[180]],["pendown",[]],["rt",[45]]]
      },
      mkirjain: {
        commands: [["penup",[]],["lt",[135]],["fd",[120]],["rt",[135]],["pendown",[]],["fd",[200]],["penup",[]],["rt",[0]],["fd",[10]],["lt",[0]],["pendown",[]],["text",["RT 135"]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["rt",[135]],["fd",[120]],["lt",[135]],["penup",[]],["rt",[180]],["fd",[20]],["lt",[180]],["pendown",[]],["text",["LT 90"]],["penup",[]],["rt",[0]],["fd",[20]],["lt",[0]],["pendown",[]],["rt",[45]],["fd",[120]],["lt",[45]],["penup",[]],["rt",[0]],["fd",[10]],["lt",[0]],["pendown",[]],["text",["RT 135"]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["rt",[180]],["fd",[200]]]
      },
      kaksiviivaa: {
        offsetX: 50,
        commands: [["penup",[]],["lt",[135]],["fd",[120]],["rt",[135]],["pendown",[]],["fd",[200]],["penup",[]],["rt",[90]],["fd",[200]],["pendown",[]],["rt",[90]],["fd",[200]],["penup",[]],["rt",[180]],["fd",[180]],["rt",[90]],["fd",[20]],["lt",[90]],["text",["fd 100"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]],["text",["penup"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]],["text",["rt 90"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]],["text",["fd 100"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]],["text",["rt 90"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]],["text",["pendown"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]],["text",["fd 100"]],["penup",[]],["rt",[180]],["fd",[25]],["lt",[180]],["pendown",[]]]
      },
      neliovaiheet: {
        offsetY: 100,
        commands: [["penup",[]],["lt",[90]],["fd",[220]],["rt",[90]],["pendown",[]],["penup",[]],["rt",[270]],["fd",[80]],["lt",[270]],["pendown",[]],["text",["FD 100"]],["penup",[]],["rt",[90]],["fd",[80]],["lt",[90]],["pendown",[]],["fd",[200]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["lt",[90]],["fd",[5]],["rt",[104.03624346792648]],["fd",[20.615528128088304]],["rt",[151.92751306414704]],["fd",[20.615528128088304]],["rt",[104.03624346792648]],["fd",[5]],["rt",[90]],["penup",[]],["rt",[0]],["fd",[10]],["lt",[0]],["pendown",[]],["penup",[]],["rt",[180]],["fd",[200]],["lt",[180]],["pendown",[]],["penup",[]],["rt",[90]],["fd",[50]],["lt",[90]],["pendown",[]],["fd",[200]],["rt",[90]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["lt",[90]],["fd",[5]],["rt",[104.03624346792648]],["fd",[20.615528128088304]],["rt",[151.92751306414704]],["fd",[20.615528128088304]],["rt",[104.03624346792648]],["fd",[5]],["rt",[90]],["penup",[]],["rt",[0]],["fd",[10]],["lt",[0]],["pendown",[]],["penup",[]],["rt",[180]],["fd",[30]],["lt",[180]],["pendown",[]],["text",["RT 90"]],["penup",[]],["rt",[360]],["fd",[30]],["lt",[360]],["pendown",[]],["lt",[90]],["penup",[]],["rt",[180]],["fd",[200]],["lt",[180]],["pendown",[]],["penup",[]],["rt",[90]],["fd",[30]],["lt",[90]],["pendown",[]],["fd",[200]],["rt",[90]],["fd",[200]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["lt",[90]],["fd",[5]],["rt",[104.03624346792648]],["fd",[20.615528128088304]],["rt",[151.92751306414704]],["fd",[20.615528128088304]],["rt",[104.03624346792648]],["fd",[5]],["rt",[90]],["penup",[]],["rt",[0]],["fd",[10]],["lt",[0]],["pendown",[]],["lt",[90]],["penup",[]],["rt",[260]],["fd",[150]],["lt",[260]],["pendown",[]],["text",["FD 100"]],["penup",[]],["rt",[440]],["fd",[150]],["lt",[440]],["pendown",[]],["penup",[]],["rt",[180]],["fd",[200]],["lt",[180]],["pendown",[]],["penup",[]],["rt",[90]],["fd",[30]],["lt",[90]],["pendown",[]],["fd",[200]],["rt",[90]],["fd",[200]],["rt",[90]],["penup",[]],["rt",[180]],["fd",[10]],["lt",[180]],["pendown",[]],["lt",[90]],["fd",[5]],["rt",[104.03624346792648]],["fd",[20.615528128088304]],["rt",[151.92751306414704]],["fd",[20.615528128088304]],["rt",[104.03624346792648]],["fd",[5]],["rt",[90]],["penup",[]],["rt",[0]],["fd",[10]],["lt",[0]],["pendown",[]],["lt",[180]],["penup",[]],["rt",[256]],["fd",[120]],["lt",[256]],["pendown",[]],["text",["RT 90"]],["penup",[]],["rt",[436]],["fd",[120]],["lt",[436]],["pendown",[]],["penup",[]],["rt",[180]],["fd",[200]],["lt",[180]],["pendown",[]]]
      },
      portaat: {
        offsetY: 50,
        commands: [["penup",[]],["rt",[270]],["fd",[100]],["lt",[270]],["pendown",[]],["text",["ALAKERTA"]],["penup",[]],["rt",[450]],["fd",[100]],["lt",[450]],["pendown",[]],["fd",[20]],["rt",[90]],["fd",[20]],["lt",[90]],["fd",[20]],["rt",[90]],["fd",[20]],["lt",[90]],["fd",[20]],["rt",[90]],["fd",[20]],["lt",[90]],["fd",[20]],["rt",[90]],["fd",[20]],["lt",[90]],["fd",[20]],["rt",[90]],["fd",[20]],["lt",[90]],["text",["YLÄKERTA"]],["penup",[]],["rt",[90]],["fd",[110]],["lt",[90]],["pendown",[]]]
      }
    }

    $(".turtle-diagram").each(function() {
      var elem = $(this)
      var id = elem.attr("data-id")
      var diagram = turtleDiagrams[id]
      var turtle = Turtle(elem, parseInt(elem.css("width")) || 640, parseInt(elem.css("height")) || 500)
      var drawn = false
      whenInView(elem, function(inView) {
        if (inView && !drawn) {
          drawn = true
          if (diagram.offsetY) {
            turtle.penup()
            turtle.rt(180)
            turtle.fd(diagram.offsetY)
            turtle.rt(180)
            turtle.pendown()
          }
          if (diagram.offsetX) {
            turtle.penup()
            turtle.lt(90)
            turtle.fd(diagram.offsetX)
            turtle.rt(90)
            turtle.pendown()
          }
          var calls = diagram.commands
          calls = _.reduce(calls, foldTurns, [])
          calls.forEach(function(call) {
            turtle[call[0]].apply(turtle, call[1])
          })
        }
      })
      function foldTurns(commands, command) {
        if (isTurn(command)) {
          var index = findDrawOrMove(commands)
          if (index >= 0 && isTurn(commands[index])) {
            commands[index] = combineTurns(command, commands[index])
            return commands
          }
        }
        return commands.concat([command])
      }
      function findDrawOrMove(commands) {
        for (var i = commands.length - 1; i >= 0; i--) {
          if (isTurn(commands[i]) || isDraw(commands[i])) {
            return i
          }
        }
        return -1
      }
      function isTurn(command) {
        return command && (command[0] == "lt" || command[0] == "rt")
      }
      function isDraw(command) {
        return !isTurn(command) && !isPen(command)
      }
      function isPen(command) {
        return command && command[0].indexOf("pen") == 0
      }
      function combineTurns(a, b) {
        var angle = (turnAngle(a) + turnAngle(b)) % 360
        if (angle > 180) angle = angle - 360
        return turnFromAngle(angle)
      }
      function turnAngle(turn) {
        if (turn[0] == "rt")
          return turn[1][0]
        return -turn[1][0]
      }
      function turnFromAngle(angle) {
        if (angle < 0) {
          return ["lt", [-angle]]
        }
        return ["rt", [angle]]
      }
    })
  })
})

from wordle.game import Game;

import sys

print(sys.path)

g = Game()
g.api_init("wordle-allowed-guesses.txt", "wordle-answers-alphabetical.txt")
print(len(g.full_word_list))

# g = game.Game(FILE_ALL_WORDS, FILE_ANSWERS)

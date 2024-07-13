import random
import os
wordList = ['苹果', '鸭梨', 'ChatGPT', '文心一言', 'Python', 'JavaScript', '德国', '以色列', '原神', '第五人格', '西瓜', '冬瓜', '南京', '北京', '柏林', '都柏林', '河南', '荷兰', '苦力怕', '末影人']

while True:
  playerQuantity = int(input("玩家数量："))
  spyQuantity = int(input("卧底数量："))
  if spyQuantity >= playerQuantity / 2:
    print("请重新设置卧底数量，使其小于玩家总数的一半。")
  else:
    break
civilianQuantity = playerQuantity - spyQuantity
i = 0
playerList = []
while i < playerQuantity:
  playerList.append(False)
  i += 1
i = 0
spyList = []
while i < spyQuantity:
  while True:
    spyNum = random.randint(0, len(playerList) - 1)
    if playerList[spyNum] == False:
      playerList[spyNum] = True
      spyList.append(spyNum)
      i += 1
      break  
#print(playerList)
spyWordNum = random.randint(0, len(wordList) - 1)
spyWord = wordList[spyWordNum]
if (spyWordNum % 2 == 0):
  civilianWord = wordList[spyWordNum + 1]

elif (spyWordNum % 2 == 1):
  civilianWord = wordList[spyWordNum - 1]
#print (spyWord + civilianWord)

playerNum = 0
for playerState in playerList:
  input('请'+ str(playerNum) + '号玩家按下回车键查看你的词')
  if playerList[playerNum] == True:
    input(spyWord)
  else:
    input(civilianWord)
  playerNum += 1
  os.system("cls")


def end():
  print("平民词是："+civilianWord)
  print("卧底词是："+spyWord)
  print(spyList, "号玩家是卧底。")

while True:
  voteNum = int(input("请描述并进行投票。输入得票数最多的玩家编号："))
  if voteNum > len(playerList) - 1:
    print("玩家编号有误，请重新投票")
  elif playerList[voteNum] == None:
    print("被投票玩家已出局，请重新投票")  
  elif playerList[voteNum] == True:
    print("被票死的玩家是卧底。")
    playerList[voteNum] = None
    spyQuantity -=1
    if spyQuantity == 0:
      print("平民胜利！")
      end()
      break
  elif playerList[voteNum] == False:
    print("被票死的玩家是平民。")
    playerList[voteNum] = None
    civilianQuantity -=1
    if spyQuantity >= civilianQuantity:
      print("卧底胜利！")
      end()
      break
  
  

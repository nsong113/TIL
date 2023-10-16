fruits = ['사과','배','감','귤'] # fruits라는 과일 값이 담긴 리스트

# fruits라는 리스트의 요소를 돌아가면서 반복할건데,
# 그 요소 중 하나를 fruit라고 할게요. fruit는 순서대로 사과/배/감/귤 이 됩니다
for fruit in fruits:
	print(fruit)

# 사과, 배, 감, 귤 하나씩 꺼내어 찍힙니다.

ages=[1,2,30,4,5]
for age in ages:
    if age>20:
        print(f'{age}살은 성인입니다.')
    else: 
        print(f'{age}살은 청소년입니다')
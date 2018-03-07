package basic;

public class TestLabel {
	public static void main(String[] args){
		int i = 0;
		outter:
		for(;true;){
			inner:
			for(;i<10;i++){
				System.out.println("i=" + i);
				if(i==2){
					System.out.println("continue");
					continue;
				}
				if(i==4){
					System.out.println("break");
					i++;
					break;
				}
				if(i==6){
					System.out.println("continue outter");
					i++;
					continue outter;
				}
				if(i==8){
					System.out.println("break inner");
					break outter;
				}
				for(int j=0;j<5;j++){
					if(j==3){
						System.out.println("continue inner");
						continue inner;
					}
				}
			}
		}
	}
}

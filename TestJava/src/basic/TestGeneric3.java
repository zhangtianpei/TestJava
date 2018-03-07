package basic;

import java.util.ArrayList;
import java.util.List;

public class TestGeneric3 {
	public static void main(String[] args){
		List<String> nameList = new ArrayList<String>();
		List<Integer> ageList = new ArrayList<Integer>();
		nameList.add("Jack");
		ageList.add(20);
		getData(nameList);
		getData(ageList);
	}
	
	public static void getData(List<?> data){
		System.out.println(data.get(0));
	}
}

package basic;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TestArrayList {
	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		list.add("AAA");
		list.add("BBB");
		list.add("CCC");
		for (String lst : list) {
			System.out.println(lst);
		}

		Iterator<String> ite = list.iterator();
		while (ite.hasNext()) {
			System.out.println(ite.next());
		}

		String[] strArray = new String[list.size()];
		list.toArray(strArray);
		for (String str : strArray) {
			System.out.println(str);
		}
		for (int i = 0; i < strArray.length; i++) // 这里也可以改写为 for(String str:strArray)这种形式
		{
			System.out.println(strArray[i]);
		}

	}
}

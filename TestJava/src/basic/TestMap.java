package basic;

import java.util.HashMap;
import java.util.Map;

public class TestMap {
	public static void main(String[] args) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("1", "AAA");
		map.put("2", "BBB");
		map.put("3", "CCC");
		for (String key : map.keySet()) {
			System.out.println("key:" + key + ",value:" + map.get(key));
		}
		for (Map.Entry<String, String> entry : map.entrySet()) {
			System.out.println("key:" + entry.getKey() + ",value:" + entry.getValue());
		}
	}
}

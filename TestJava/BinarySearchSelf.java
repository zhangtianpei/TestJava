package algs;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class BinarySearchSelf {

	public static int rank(int key, List<String> a) {
		int startIndex = 0;
		int endIndex = a.size() - 1;
		while (startIndex <= endIndex) {
			int mid = startIndex + ((endIndex - startIndex) / 2);
			if (key < Integer.parseInt(a.get(mid))) {
				endIndex = mid - 1;
			} else if (key > Integer.parseInt(a.get(mid))) {
				startIndex = mid + 1;
			} else {
				return mid;
			}
		}
		return -1;
	}

	public static List<String> readStringList(String url) {
		BufferedReader br = null;
		List<String> arr = null;
		try {
			br = new BufferedReader(new FileReader(url));
			String[] str = br.readLine().split("\\s+");
			arr = Arrays.asList(str);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
		return arr;
	}

	public static void main(String[] args) {
		List<String> arr = readStringList("D:\\JAVA学习\\temp\\test.txt");
		int keyIndex = rank(999, arr) + 1;
		if (keyIndex > 0) {
			System.out.println("This key's index is " + keyIndex);
		} else {
			System.out.println("This key is not exist in arr[]!");
		}
	}

}

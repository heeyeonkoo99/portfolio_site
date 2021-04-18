package com.example.psychological_test.fragment

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.View.inflate
import android.view.ViewGroup
import androidx.navigation.NavController
import androidx.navigation.Navigation
import com.example.psychological_test.R
import com.example.psychological_test.databinding.FragmentMainBinding


class MainFragment : Fragment() {

    private var _binding: FragmentMainBinding?=null
    private val binding get()= _binding!!
    lateinit var navController:NavController

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding= FragmentMainBinding.inflate(inflater,container,false)
        val view=binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        navController=Navigation.findNavController(view)
        //kotlin-extension이 사라졌기에 가능하면 view-binding을 써허 findviewbyid역할을 해보자!
        binding.btnNext.setOnClickListener{
            navController.navigate(R.id.action_mainFragment_to_questionFragment)
        }

    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding=null
    }

}


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo16Component } from './lib68-demo16.component';

describe('Lib68Demo16Component', () => {
  let component: Lib68Demo16Component;
  let fixture: ComponentFixture<Lib68Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo16Component } from './lib30-demo16.component';

describe('Lib30Demo16Component', () => {
  let component: Lib30Demo16Component;
  let fixture: ComponentFixture<Lib30Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo16Component } from './lib53-demo16.component';

describe('Lib53Demo16Component', () => {
  let component: Lib53Demo16Component;
  let fixture: ComponentFixture<Lib53Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

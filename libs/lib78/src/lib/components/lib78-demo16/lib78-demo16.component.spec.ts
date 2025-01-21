import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo16Component } from './lib78-demo16.component';

describe('Lib78Demo16Component', () => {
  let component: Lib78Demo16Component;
  let fixture: ComponentFixture<Lib78Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

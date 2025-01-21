import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo16Component } from './lib48-demo16.component';

describe('Lib48Demo16Component', () => {
  let component: Lib48Demo16Component;
  let fixture: ComponentFixture<Lib48Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

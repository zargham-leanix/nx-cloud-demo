import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo17Component } from './lib41-demo17.component';

describe('Lib41Demo17Component', () => {
  let component: Lib41Demo17Component;
  let fixture: ComponentFixture<Lib41Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

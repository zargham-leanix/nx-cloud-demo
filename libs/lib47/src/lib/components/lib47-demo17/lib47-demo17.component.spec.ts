import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo17Component } from './lib47-demo17.component';

describe('Lib47Demo17Component', () => {
  let component: Lib47Demo17Component;
  let fixture: ComponentFixture<Lib47Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

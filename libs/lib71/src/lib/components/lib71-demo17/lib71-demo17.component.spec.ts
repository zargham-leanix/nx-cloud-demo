import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo17Component } from './lib71-demo17.component';

describe('Lib71Demo17Component', () => {
  let component: Lib71Demo17Component;
  let fixture: ComponentFixture<Lib71Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo17Component } from './lib30-demo17.component';

describe('Lib30Demo17Component', () => {
  let component: Lib30Demo17Component;
  let fixture: ComponentFixture<Lib30Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

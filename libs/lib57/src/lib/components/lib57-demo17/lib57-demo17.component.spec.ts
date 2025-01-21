import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo17Component } from './lib57-demo17.component';

describe('Lib57Demo17Component', () => {
  let component: Lib57Demo17Component;
  let fixture: ComponentFixture<Lib57Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

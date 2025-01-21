import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo17Component } from './lib12-demo17.component';

describe('Lib12Demo17Component', () => {
  let component: Lib12Demo17Component;
  let fixture: ComponentFixture<Lib12Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

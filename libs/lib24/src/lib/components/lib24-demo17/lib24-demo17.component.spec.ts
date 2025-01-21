import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo17Component } from './lib24-demo17.component';

describe('Lib24Demo17Component', () => {
  let component: Lib24Demo17Component;
  let fixture: ComponentFixture<Lib24Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

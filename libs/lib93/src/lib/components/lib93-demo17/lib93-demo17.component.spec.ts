import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo17Component } from './lib93-demo17.component';

describe('Lib93Demo17Component', () => {
  let component: Lib93Demo17Component;
  let fixture: ComponentFixture<Lib93Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

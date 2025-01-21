import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo17Component } from './lib95-demo17.component';

describe('Lib95Demo17Component', () => {
  let component: Lib95Demo17Component;
  let fixture: ComponentFixture<Lib95Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

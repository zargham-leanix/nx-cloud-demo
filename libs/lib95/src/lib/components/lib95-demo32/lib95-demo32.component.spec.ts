import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo32Component } from './lib95-demo32.component';

describe('Lib95Demo32Component', () => {
  let component: Lib95Demo32Component;
  let fixture: ComponentFixture<Lib95Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

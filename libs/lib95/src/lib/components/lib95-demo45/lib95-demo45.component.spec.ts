import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo45Component } from './lib95-demo45.component';

describe('Lib95Demo45Component', () => {
  let component: Lib95Demo45Component;
  let fixture: ComponentFixture<Lib95Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

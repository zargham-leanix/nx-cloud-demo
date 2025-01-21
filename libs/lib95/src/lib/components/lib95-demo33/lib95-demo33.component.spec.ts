import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo33Component } from './lib95-demo33.component';

describe('Lib95Demo33Component', () => {
  let component: Lib95Demo33Component;
  let fixture: ComponentFixture<Lib95Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

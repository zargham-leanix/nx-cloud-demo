import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo33Component } from './lib30-demo33.component';

describe('Lib30Demo33Component', () => {
  let component: Lib30Demo33Component;
  let fixture: ComponentFixture<Lib30Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

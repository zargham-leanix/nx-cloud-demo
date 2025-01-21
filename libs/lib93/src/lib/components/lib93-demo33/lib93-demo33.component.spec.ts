import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo33Component } from './lib93-demo33.component';

describe('Lib93Demo33Component', () => {
  let component: Lib93Demo33Component;
  let fixture: ComponentFixture<Lib93Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

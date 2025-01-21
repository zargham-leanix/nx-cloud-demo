import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo33Component } from './lib29-demo33.component';

describe('Lib29Demo33Component', () => {
  let component: Lib29Demo33Component;
  let fixture: ComponentFixture<Lib29Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

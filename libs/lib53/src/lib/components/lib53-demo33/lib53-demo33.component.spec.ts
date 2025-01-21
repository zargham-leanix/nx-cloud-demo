import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo33Component } from './lib53-demo33.component';

describe('Lib53Demo33Component', () => {
  let component: Lib53Demo33Component;
  let fixture: ComponentFixture<Lib53Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

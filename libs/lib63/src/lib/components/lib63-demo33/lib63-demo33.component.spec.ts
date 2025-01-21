import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo33Component } from './lib63-demo33.component';

describe('Lib63Demo33Component', () => {
  let component: Lib63Demo33Component;
  let fixture: ComponentFixture<Lib63Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

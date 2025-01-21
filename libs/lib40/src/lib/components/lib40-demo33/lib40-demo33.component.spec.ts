import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo33Component } from './lib40-demo33.component';

describe('Lib40Demo33Component', () => {
  let component: Lib40Demo33Component;
  let fixture: ComponentFixture<Lib40Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

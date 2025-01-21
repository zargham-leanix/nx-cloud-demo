import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo45Component } from './lib40-demo45.component';

describe('Lib40Demo45Component', () => {
  let component: Lib40Demo45Component;
  let fixture: ComponentFixture<Lib40Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo33Component } from './lib61-demo33.component';

describe('Lib61Demo33Component', () => {
  let component: Lib61Demo33Component;
  let fixture: ComponentFixture<Lib61Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

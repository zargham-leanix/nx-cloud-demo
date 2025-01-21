import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo33Component } from './lib59-demo33.component';

describe('Lib59Demo33Component', () => {
  let component: Lib59Demo33Component;
  let fixture: ComponentFixture<Lib59Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

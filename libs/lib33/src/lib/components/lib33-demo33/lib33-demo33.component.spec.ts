import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo33Component } from './lib33-demo33.component';

describe('Lib33Demo33Component', () => {
  let component: Lib33Demo33Component;
  let fixture: ComponentFixture<Lib33Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

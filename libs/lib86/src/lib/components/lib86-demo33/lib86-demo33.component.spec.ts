import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo33Component } from './lib86-demo33.component';

describe('Lib86Demo33Component', () => {
  let component: Lib86Demo33Component;
  let fixture: ComponentFixture<Lib86Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

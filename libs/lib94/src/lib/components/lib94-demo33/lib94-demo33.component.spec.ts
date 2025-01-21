import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo33Component } from './lib94-demo33.component';

describe('Lib94Demo33Component', () => {
  let component: Lib94Demo33Component;
  let fixture: ComponentFixture<Lib94Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

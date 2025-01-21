import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo45Component } from './lib94-demo45.component';

describe('Lib94Demo45Component', () => {
  let component: Lib94Demo45Component;
  let fixture: ComponentFixture<Lib94Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo45Component } from './lib86-demo45.component';

describe('Lib86Demo45Component', () => {
  let component: Lib86Demo45Component;
  let fixture: ComponentFixture<Lib86Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

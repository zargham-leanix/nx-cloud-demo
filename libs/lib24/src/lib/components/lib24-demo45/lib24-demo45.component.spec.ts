import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo45Component } from './lib24-demo45.component';

describe('Lib24Demo45Component', () => {
  let component: Lib24Demo45Component;
  let fixture: ComponentFixture<Lib24Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

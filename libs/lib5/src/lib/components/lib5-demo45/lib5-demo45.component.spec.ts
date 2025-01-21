import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo45Component } from './lib5-demo45.component';

describe('Lib5Demo45Component', () => {
  let component: Lib5Demo45Component;
  let fixture: ComponentFixture<Lib5Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

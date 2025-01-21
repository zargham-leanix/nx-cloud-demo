import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo45Component } from './lib27-demo45.component';

describe('Lib27Demo45Component', () => {
  let component: Lib27Demo45Component;
  let fixture: ComponentFixture<Lib27Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

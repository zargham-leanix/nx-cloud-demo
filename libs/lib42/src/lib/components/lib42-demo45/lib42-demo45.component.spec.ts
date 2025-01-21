import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo45Component } from './lib42-demo45.component';

describe('Lib42Demo45Component', () => {
  let component: Lib42Demo45Component;
  let fixture: ComponentFixture<Lib42Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

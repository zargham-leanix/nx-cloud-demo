import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo45Component } from './lib54-demo45.component';

describe('Lib54Demo45Component', () => {
  let component: Lib54Demo45Component;
  let fixture: ComponentFixture<Lib54Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

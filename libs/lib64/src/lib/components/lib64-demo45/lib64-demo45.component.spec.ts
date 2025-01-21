import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo45Component } from './lib64-demo45.component';

describe('Lib64Demo45Component', () => {
  let component: Lib64Demo45Component;
  let fixture: ComponentFixture<Lib64Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo45Component } from './lib68-demo45.component';

describe('Lib68Demo45Component', () => {
  let component: Lib68Demo45Component;
  let fixture: ComponentFixture<Lib68Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

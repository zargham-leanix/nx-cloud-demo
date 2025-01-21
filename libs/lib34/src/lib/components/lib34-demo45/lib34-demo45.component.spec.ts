import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo45Component } from './lib34-demo45.component';

describe('Lib34Demo45Component', () => {
  let component: Lib34Demo45Component;
  let fixture: ComponentFixture<Lib34Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

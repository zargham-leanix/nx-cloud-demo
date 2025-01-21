import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo36Component } from './lib22-demo36.component';

describe('Lib22Demo36Component', () => {
  let component: Lib22Demo36Component;
  let fixture: ComponentFixture<Lib22Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

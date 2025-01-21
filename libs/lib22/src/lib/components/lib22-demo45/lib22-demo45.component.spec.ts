import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo45Component } from './lib22-demo45.component';

describe('Lib22Demo45Component', () => {
  let component: Lib22Demo45Component;
  let fixture: ComponentFixture<Lib22Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

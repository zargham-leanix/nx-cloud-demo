import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo45Component } from './lib76-demo45.component';

describe('Lib76Demo45Component', () => {
  let component: Lib76Demo45Component;
  let fixture: ComponentFixture<Lib76Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

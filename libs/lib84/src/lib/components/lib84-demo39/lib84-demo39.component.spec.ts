import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo39Component } from './lib84-demo39.component';

describe('Lib84Demo39Component', () => {
  let component: Lib84Demo39Component;
  let fixture: ComponentFixture<Lib84Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

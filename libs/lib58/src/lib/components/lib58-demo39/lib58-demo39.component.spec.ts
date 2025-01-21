import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo39Component } from './lib58-demo39.component';

describe('Lib58Demo39Component', () => {
  let component: Lib58Demo39Component;
  let fixture: ComponentFixture<Lib58Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

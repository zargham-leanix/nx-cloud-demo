import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo39Component } from './lib75-demo39.component';

describe('Lib75Demo39Component', () => {
  let component: Lib75Demo39Component;
  let fixture: ComponentFixture<Lib75Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

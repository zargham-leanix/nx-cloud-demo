import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo39Component } from './lib20-demo39.component';

describe('Lib20Demo39Component', () => {
  let component: Lib20Demo39Component;
  let fixture: ComponentFixture<Lib20Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

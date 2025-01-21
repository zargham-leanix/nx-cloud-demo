import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo39Component } from './lib88-demo39.component';

describe('Lib88Demo39Component', () => {
  let component: Lib88Demo39Component;
  let fixture: ComponentFixture<Lib88Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

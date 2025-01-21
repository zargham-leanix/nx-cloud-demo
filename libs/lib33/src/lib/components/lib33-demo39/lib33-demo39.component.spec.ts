import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo39Component } from './lib33-demo39.component';

describe('Lib33Demo39Component', () => {
  let component: Lib33Demo39Component;
  let fixture: ComponentFixture<Lib33Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

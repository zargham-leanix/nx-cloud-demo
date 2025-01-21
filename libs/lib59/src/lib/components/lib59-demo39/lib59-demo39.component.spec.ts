import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo39Component } from './lib59-demo39.component';

describe('Lib59Demo39Component', () => {
  let component: Lib59Demo39Component;
  let fixture: ComponentFixture<Lib59Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

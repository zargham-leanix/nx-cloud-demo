import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo39Component } from './lib25-demo39.component';

describe('Lib25Demo39Component', () => {
  let component: Lib25Demo39Component;
  let fixture: ComponentFixture<Lib25Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

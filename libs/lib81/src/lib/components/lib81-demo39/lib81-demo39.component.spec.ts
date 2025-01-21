import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo39Component } from './lib81-demo39.component';

describe('Lib81Demo39Component', () => {
  let component: Lib81Demo39Component;
  let fixture: ComponentFixture<Lib81Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

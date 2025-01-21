import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo39Component } from './lib85-demo39.component';

describe('Lib85Demo39Component', () => {
  let component: Lib85Demo39Component;
  let fixture: ComponentFixture<Lib85Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

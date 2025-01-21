import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo39Component } from './lib55-demo39.component';

describe('Lib55Demo39Component', () => {
  let component: Lib55Demo39Component;
  let fixture: ComponentFixture<Lib55Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

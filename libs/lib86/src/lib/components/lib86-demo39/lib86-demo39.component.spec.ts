import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo39Component } from './lib86-demo39.component';

describe('Lib86Demo39Component', () => {
  let component: Lib86Demo39Component;
  let fixture: ComponentFixture<Lib86Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

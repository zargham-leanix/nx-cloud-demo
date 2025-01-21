import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo39Component } from './lib94-demo39.component';

describe('Lib94Demo39Component', () => {
  let component: Lib94Demo39Component;
  let fixture: ComponentFixture<Lib94Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

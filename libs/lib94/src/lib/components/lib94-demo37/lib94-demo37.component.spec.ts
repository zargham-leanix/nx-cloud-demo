import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo37Component } from './lib94-demo37.component';

describe('Lib94Demo37Component', () => {
  let component: Lib94Demo37Component;
  let fixture: ComponentFixture<Lib94Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

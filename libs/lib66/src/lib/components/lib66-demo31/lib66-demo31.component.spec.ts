import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo31Component } from './lib66-demo31.component';

describe('Lib66Demo31Component', () => {
  let component: Lib66Demo31Component;
  let fixture: ComponentFixture<Lib66Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

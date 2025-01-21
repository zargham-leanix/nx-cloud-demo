import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo31Component } from './lib99-demo31.component';

describe('Lib99Demo31Component', () => {
  let component: Lib99Demo31Component;
  let fixture: ComponentFixture<Lib99Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

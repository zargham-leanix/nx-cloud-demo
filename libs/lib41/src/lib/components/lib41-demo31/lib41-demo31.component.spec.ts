import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo31Component } from './lib41-demo31.component';

describe('Lib41Demo31Component', () => {
  let component: Lib41Demo31Component;
  let fixture: ComponentFixture<Lib41Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

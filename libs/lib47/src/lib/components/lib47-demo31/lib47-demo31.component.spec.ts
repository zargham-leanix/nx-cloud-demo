import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo31Component } from './lib47-demo31.component';

describe('Lib47Demo31Component', () => {
  let component: Lib47Demo31Component;
  let fixture: ComponentFixture<Lib47Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
